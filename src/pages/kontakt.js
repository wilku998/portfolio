import React, { useState } from "react"
import styled from "styled-components"
import { isEmail } from "validator"
import mailgun from "mailgun.js"

const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
  public_key: process.env.MAILGUN_PUBLIC_KEY,
})

const Main = styled.main`
  height: 100vh;
  padding: 10rem;
`

export default () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  })
  const [errorMessage, setErrorMessage] = useState("")
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
        setErrorMessage(
          `${name} musi posiadać conajmniej 5 znaków oraz mniej niż 31.`
        )
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
            setErrorMessage("Niepoprawny adres email.")
          }
          break
        case "message":
          stringValidation(length, 300, "Wiadomość")
          break
      }
    })

    if (valid) {
      try {
        await mg.messages.create(process.env.MAILGUN_DOMAIN, {
          from: `${name} <${email}>`,
          to: ["wilkbartosz98@wp.pl"],
          subject: title,
          text: message,
          html: "",
        })
        setErrorMessage("Wiadomość wysłana")
      } catch (e) {
        setErrorMessage("Ups. Coś poszło nie tak, zapraszam do wysłania maila ze swojej skrzynki pocztowej.")
      }
    }
  }

  return (
    <Main>
      <form onSubmit={onSubmit}>
        <label>
          <span>Imie</span>
          <input name="name" type="text" onChange={onFormChange} value={name} />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            onChange={onFormChange}
            value={email}
          />
        </label>
        <label>
          <span>Tytuł</span>
          <input
            name="title"
            type="text"
            onChange={onFormChange}
            value={title}
          />
        </label>
        <label>
          <span>Wiadomość</span>
          <textarea name="message" onChange={onFormChange} value={message} />
        </label>
        <button>send</button>
        {errorMessage && <span>{errorMessage}</span>}
      </form>
    </Main>
  )
}
