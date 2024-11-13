import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import Modal from "./Modal"
import { Field, Form, Formik } from "formik"
import { db } from "../config/firebase"
import { toast } from "react-toastify"

const AddAndUpdateContact = ({isOpen, onClose, isUpdate, contact}) => {

  const addContact = async (contact) => {
    try{
      const contactRef = collection(db,"contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Succesfully")
    }catch(error){
      console.log(error);
    }
  }

  const updateContact = async (contact, id) => {
    try{
      const contactRef = doc(db,"contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Succesfully")
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div>
       <Modal isOpen={isOpen} onClose={onClose}>
        <Formik 
          initialValues={isUpdate 
            ?{
              name: contact.name,
              email: contact.email,
            }
            :{
            name: "",
            email: "",
          }}
          onSubmit={(values)=> {
            console.log(values);
            isUpdate ?
            updateContact(values, contact.id):
            addContact(values)
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border"/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email"  className="h-10 border"/>
            </div>
            <button className="border bg-orange px-3 py-1.5 self-end ">
              {isUpdate ? "update" : "add"} contact
            </button>
          </Form>
        </Formik>
       </Modal>
    </div>
  )
}

export default AddAndUpdateContact