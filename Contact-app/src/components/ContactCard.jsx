import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDis from "../hooks/useDis";
import { toast } from "react-toastify";

const ContactCard = ({contact}) => {

  const {isOpen, onClose, onOpen} = useDis();


  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully")
    } catch (error) {
      console.log(error)
    }
  }

  return (
   <>
    <div key={contact.id} className="bg-dark-yellow flex justify-between items-center p-2 rounded-lg">
         <div className="flex gap-1">
         <HiOutlineUserCircle className="text-orange text-4xl" />
          <div className="text-white">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
         </div>
          <div className="flex text-3xl">
            <RiEditCircleLine onClick={onOpen} className="cursor-pointer"></RiEditCircleLine>
            <IoMdTrash onClick={() => deleteContact(contact.id)}className="text-orange cursor-pointer"></IoMdTrash>
          </div>
        </div>
        <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
        </>
  )
}

export default ContactCard