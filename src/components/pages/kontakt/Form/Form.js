import React, { useState } from "react"
import { isEmail } from "validator"
import ajax from "../../../../ajax"
import style, { Label, Input, Button, Info } from "./styleForm"

const initialFormState = {
  name: "",
  email: "",
  title: "",
  message: "",
}

const Form = ({ className }) => {
  const [form, setForm] = useState(initialFormState)
  const [info, setInfo] = useState("Imię musi posiadać conajmniej 5 znaków oraz mniej niż 31.")
  const { name, email, title, message } = form

  const onFormChange = e => {
    const { value, name } = e.target
    setForm({ ...form, [name]: value })
  }

  const onSubmit = async e => {
    e.preventDefault()
    let valid = true
    const stringValidation = (length, limit, name) => {
      if (length < 5 || length > limit) {
        valid = false
        setInfo(`${name} musi posiadać conajmniej 5 znaków oraz mniej niż 31.`)
      }
    }

    Object.keys(form).forEach(key => {
      const length = form[key].length
      switch (key) {
        case "name":
          stringValidation(length, 30, "Imie")
          break
        case "title":
          stringValidation(length, 30, "Tytuł")
          break
        case "email":
          if (!isEmail(email)) {
            valid = false
            setInfo("Niepoprawny adres email.")
          }
          break
        case "message":
          stringValidation(length, 500, "Wiadomość")
          break
      }
    })

    if (valid) {
      const data = {
        from: `${name} ${email}`,
        to: "wilkbartosz98@wp.pl",
        subject: title,
        text: message,
      }
      const response = await ajax(
        "POST",
        "https://wilkmailsender.herokuapp.com/mails",
        data,
        201
      )
      if (response.error) {
        setInfo(
          "Ups. Coś poszło nie tak, zapraszam do wysłania maila ze swojej skrzynki pocztowej."
        )
      } else {
        setForm(initialFormState)
        setInfo("Wiadomość wysłana.")
      }
    }
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      <Label>
        <span>Imie</span>
        <Input name="name" type="text" onChange={onFormChange} value={name} />
      </Label>
      <Label>
        <span>Email</span>
        <Input
          name="email"
          type="email"
          onChange={onFormChange}
          value={email}
        />
      </Label>
      <Label>
        <span>Tytuł</span>
        <Input name="title" type="text" onChange={onFormChange} value={title} />
      </Label>
      <Label>
        <span>Wiadomość</span>
        <Input
          as="textarea"
          rows="10"
          maxlength="500"
          name="message"
          onChange={onFormChange}
          value={message}
          style={{ resize: "none" }}
        />
      </Label>
      {info && <Info>{info}</Info>}
      <Button>Wyślij wiadomość</Button>
    </form>
  )
}

export default style(Form)
