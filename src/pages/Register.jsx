import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all fields')
      return
    }
    
    login({ name, email })
    navigate('/checkout')
  }

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button type="submit" className="w-full">
              Create account
            </Button>

          </form>
          <p className="mt-4 text-sm text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>
          </p>

        </CardContent>
      </Card>
    </div>
  )
}

export default Register