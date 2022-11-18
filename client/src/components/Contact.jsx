import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(true)

  const handleData = () => {
    if (name?.length > 0 && email.length > 0 && subject.length > 0 && message.length > 0)
    setError(false)
  }

  useEffect(() => {
    handleData()
  }, [name, email, subject, message, error])

  useEffect(() => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    setError(true)
  }, [])

  return (
    <div>
      <div>
        <form
          action=''
          method='POST'
          encType='multipart/form-data'
        >
          <div>
            <label>Name</label>
            <input
                type='text'
                name='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label>Subject</label>
            <input
              type='text'
              name='subject'
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </div>
          <div>
            <label>Message</label>
            <input
              name='message'
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Your message...'
              value={message}
            ></input>
          </div>
          {!error? <button>
            Send Message
          </button> 
          : <p>
            Send Message
            </p>}
        </form>
      </div>
    </div>
  )
}

export default Contact