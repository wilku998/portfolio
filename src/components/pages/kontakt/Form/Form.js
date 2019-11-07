import React, { useState, useEffect } from "react"
import { isEmail } from "validator"
import ajax from "../../../../functions/ajax"
import style, { Label, Input, Button, Info } from "./styleForm"
import chooseLang from "../../../../functions/chooseLang"

const initialFormState = {
  name: "",
  email: "",
  title: "",
  message: "",
}

const Form = ({ className, lang }) => {
  const [form, setForm] = useState(initialFormState)
  const [info, setInfo] = useState("")
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
        setInfo(
          `${name} ${chooseLang(
            {
              en: `have to contain more than 5 chars and less than ${limit}.`,
              pl: `musi posiadać conajmniej 5 znaków oraz mniej niż ${limit}.`,
            },
            lang
          )}`
        )
      }
    }

    Object.keys(form).forEach(key => {
      const length = form[key].length
      switch (key) {
        case "name":
          stringValidation(
            length,
            30,
            chooseLang({ en: "Name", pl: "Imię" }, lang)
          )
          break
        case "title":
          stringValidation(
            length,
            30,
            chooseLang({ en: "Title", pl: "Tytuł" }, lang)
          )
          break
        case "email":
          if (!isEmail(email)) {
            valid = false
            setInfo(
              chooseLang(
                {
                  en: "Invalid email address.",
                  pl: "Niepoprawny adres email.",
                },
                lang
              )
            )
          }
          break
        case "message":
          stringValidation(
            length,
            1000,
            chooseLang(
              {
                en: "Message",
                pl: "Wiadomość",
              },
              lang
            )
          )
          break
        default:
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
      setInfo(
        chooseLang(
          {
            pl: "Wysyłanie wiadomości w toku.",
            en: "Sending message in progress.",
          },
          lang
        )
      )
      
      const response = await ajax(
        "POST",
        "https://wilkmailsender.herokuapp.com/mails",
        data,
        201
      )

      if (response.error) {
        setInfo(
          chooseLang(
            {
              pl:
                "Ups. Coś poszło nie tak, zapraszam do wysłania maila ze swojej skrzynki pocztowej.",
              en:
                "Ups. Something went wrong. I invite you to send me an email by yourself.",
            },
            lang
          )
        )
      } else {
        setForm(initialFormState)
        setInfo(
          chooseLang(
            {
              pl: "Wiadomość wysłana.",
              en: "Message sent.",
            },
            lang
          )
        )
      }
    }
  }

  useEffect(() => {
    setInfo("")
  }, [lang.lang])

  const textContent = chooseLang(
    {
      pl: {
        name: "Imię",
        email: "Email",
        title: "Tytuł",
        message: "Wiadomość",
        button: "Wyślij wiadomość",
      },
      en: {
        name: "Name",
        email: "Email",
        title: "Title",
        message: "Message",
        button: "Send message",
      },
    },
    lang
  )

  return (
    <form className={className} onSubmit={onSubmit}>
      <Label>
        <span>{textContent.name}</span>
        <Input name="name" type="text" onChange={onFormChange} value={name} />
      </Label>
      <Label>
        <span>{textContent.email}</span>
        <Input
          name="email"
          type="email"
          onChange={onFormChange}
          value={email}
        />
      </Label>
      <Label>
        <span>{textContent.title}</span>
        <Input name="title" type="text" onChange={onFormChange} value={title} />
      </Label>
      <Label>
        <span>{textContent.message}</span>
        <Input
          as="textarea"
          rows="10"
          maxlength="1000"
          name="message"
          onChange={onFormChange}
          value={message}
          style={{ resize: "none" }}
        />
      </Label>
      {info && <Info>{info}</Info>}
      <Button>{textContent.button}</Button>
    </form>
  )
}

export default style(Form)
