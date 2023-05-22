// index.jsx
import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import Modal from '@/components/Modal' // Import the modal component

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showModal, setShowModal] = useState(false) // State to control modal visibility
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Check login credentials
    if (email === 'test@test.com' && password === '12345') {
      // Redirect to main.jsx or any other page
      router.push('/main')
    } else {
      // Show modal for incorrect credentials
      setShowModal(true)
    }
  }

  return (
    <>
      <Head>
        <title>ATG Academy</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 gap-y-8"
        >
          <TextField
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Sign in <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <Modal.Title>Login Failed</Modal.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Incorrect email or password. Please try again.
                </p>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <Button
                onClick={() => setShowModal(false)}
                type="button"
                variant="solid"
                color="blue"
                className="w-full"
              >
                OK
              </Button>
            </div>
          </Modal>
        )}
      </AuthLayout>
    </>
  )
}
