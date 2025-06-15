'use client'

import React, { useState } from 'react'
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

interface ContactFormProps {
  formType: 'schedule-demo' | 'product-demo' | 'general-questions' | 'technical-support'
  title: string
  description?: string
  onClose?: () => void
}

export default function ContactForm({ formType, title, description, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    preferredTime: '',
    urgency: 'normal',
    hasHetriAccount: 'no',
    accountId: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  // Formspree endpoint - replace with your actual Formspree form endpoint
  const FORMSPREE_ENDPOINT = `https://formspree.io/f/mqaqqrnj`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Validate technical support requires Hetri account
    if (formType === 'technical-support' && formData.hasHetriAccount === 'no') {
      setError('Technical support is only available for existing Hetri account holders.')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType,
          subject: `${title} - ${formData.name}`,
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
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">
            Your {title.toLowerCase()} request has been submitted successfully. 
            We'll get back to you soon!
          </p>
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
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
        
        {/* Technical Support Disclaimer */}
        {formType === 'technical-support' && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-yellow-800">
                <strong>Important:</strong> Technical support is only available for existing Hetri account holders. 
                If you don't have an account yet, please select "General Questions" instead.
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hetri-primary focus:border-transparent"
            />
          </div>
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
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company/Facility Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
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

        {/* Demo Scheduling Fields */}
        {(formType === 'schedule-demo' || formType === 'product-demo') && (
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Demo Time
            </label>
            <input
              type="text"
              id="preferredTime"
              name="preferredTime"
              placeholder="e.g., Tomorrow 2pm EST, Next week mornings, etc."
              value={formData.preferredTime}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hetri-primary focus:border-transparent"
            />
          </div>
        )}

        {/* Technical Support Fields */}
        {formType === 'technical-support' && (
          <>
            <div>
              <label htmlFor="hasHetriAccount" className="block text-sm font-medium text-gray-700 mb-1">
                Do you have a Hetri account? *
              </label>
              <select
                id="hasHetriAccount"
                name="hasHetriAccount"
                required
                value={formData.hasHetriAccount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hetri-primary focus:border-transparent"
              >
                <option value="no">No, I don't have an account</option>
                <option value="yes">Yes, I have an account</option>
              </select>
            </div>
            
            {formData.hasHetriAccount === 'yes' && (
              <div>
                <label htmlFor="accountId" className="block text-sm font-medium text-gray-700 mb-1">
                  Account ID or Email Associated with Account *
                </label>
                <input
                  type="text"
                  id="accountId"
                  name="accountId"
                  required={formData.hasHetriAccount === 'yes'}
                  value={formData.accountId}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hetri-primary focus:border-transparent"
                />
              </div>
            )}

            <div>
              <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                Urgency Level
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hetri-primary focus:border-transparent"
              >
                <option value="low">Low - General inquiry</option>
                <option value="normal">Normal - Standard support</option>
                <option value="high">High - Issue affecting operations</option>
                <option value="critical">Critical - System down/emergency</option>
              </select>
            </div>
          </>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            {formType === 'technical-support' ? 'Describe the issue *' : 'Message *'}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder={
              formType === 'schedule-demo' ? 'Tell us about your facility and what you\'d like to see in the demo...' :
              formType === 'product-demo' ? 'Which specific features are you most interested in learning about?' :
              formType === 'technical-support' ? 'Please provide detailed information about the technical issue you\'re experiencing...' :
              'How can we help you today?'
            }
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
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </div>
      </form>
    </div>
  )
} 