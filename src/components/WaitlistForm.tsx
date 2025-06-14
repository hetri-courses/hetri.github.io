'use client'

import React, { useState } from 'react'
import { CheckCircleIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

interface WaitlistFormProps {
  onClose?: () => void
}

export default function WaitlistForm({ onClose }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    facilityName: '',
    contactPerson: '',
    email: '',
    phone: '',
    interests: '',
    timeline: '',
    size: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  // Formspree endpoint - replace with your actual Formspree form endpoint
  const FORMSPREE_ENDPOINT = `https://formspree.io/f/YOUR_FORM_ID_HERE`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'waitlist',
          subject: `Waitlist Registration - ${formData.facilityName}`,
          _replyto: formData.email
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (err) {
      setError('Failed to submit form. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <div className="text-center">
          <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome to the Waitlist!</h3>
          <p className="text-gray-600 mb-4">
            Your waitlist registration has been submitted successfully. 
            You'll receive a confirmation email within 24 hours.
          </p>
          <div className="bg-hetri-light p-3 rounded-lg mb-4">
            <div className="flex items-center justify-center">
              <RocketLaunchIcon className="h-5 w-5 text-hetri-primary mr-2" />
              <span className="text-hetri-primary font-medium">Position #4 in queue</span>
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="btn-primary"
            >
              Close
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Join the Hetri Waitlist</h3>
        <p className="text-gray-600">
          Be among the first to transform your pet care facility with PAW and TreatTap technology.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="facilityName" className="block text-sm font-medium text-gray-700 mb-1">
              Facility Name *
            </label>
            <input
              type="text"
              id="facilityName"
              name="facilityName"
              required
              value={formData.facilityName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hetri-primary focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Person *
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              required
              value={formData.contactPerson}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hetri-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hetri-primary focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hetri-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
              Specific Interests *
            </label>
            <select
              id="interests"
              name="interests"
              required
              value={formData.interests}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hetri-primary focus:border-transparent"
            >
              <option value="">Select your interest...</option>
              <option value="PAW only">PAW Booking System only</option>
              <option value="TreatTap only">TreatTap Live Service only</option>
              <option value="Both PAW and TreatTap">Both PAW & TreatTap</option>
              <option value="Hetri Camera">Hetri Camera Integration</option>
              <option value="Full Platform">Complete Platform Solution</option>
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
              Implementation Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hetri-primary focus:border-transparent"
            >
              <option value="">Select timeline...</option>
              <option value="Immediately">Immediately (within 1 month)</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="12+ months">12+ months</option>
              <option value="Just exploring">Just exploring options</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
            Facility Size
          </label>
          <select
            id="size"
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hetri-primary focus:border-transparent"
          >
            <option value="">Select size...</option>
            <option value="Small (1-5 pets)">Small (1-5 pets daily)</option>
            <option value="Medium (6-20 pets)">Medium (6-20 pets daily)</option>
            <option value="Large (21-50 pets)">Large (21-50 pets daily)</option>
            <option value="Enterprise (50+ pets)">Enterprise (50+ pets daily)</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us more about your facility and specific needs..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hetri-primary focus:border-transparent"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-between items-center pt-4">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist'}
          </button>
        </div>
      </form>
    </div>
  )
} 