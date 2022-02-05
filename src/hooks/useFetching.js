import { useEffect, useState } from 'react'

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetching()
  }, [])

  const fetching = async () => {
    try {
      await callback()
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return [isLoading, error]
}
