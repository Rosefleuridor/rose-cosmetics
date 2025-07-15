"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarIcon, Clock, DollarSign, Star } from "lucide-react"
import { format } from "date-fns"

const stylists = [
  {
    id: 1,
    name: "Rose Fleuridor",
    specialty: "Hair Styling & Color",
    rating: 4.9,
    image: "/placeholder.svg?height=100&width=100",
    services: [
      { name: "Wash & Style", duration: "2 hours", price: 85 },
      { name: "Color Treatment", duration: "3 hours", price: 150 },
      { name: "Protective Style", duration: "4 hours", price: 200 },
    ],
  },
  {
    id: 2,
    name: "Rose Defendre",
    specialty: "Braids & Extensions",
    rating: 4.8,
    image: "/placeholder.svg?height=100&width=100",
    services: [
      { name: "Box Braids", duration: "5 hours", price: 250 },
      { name: "Twist Out", duration: "3 hours", price: 120 },
      { name: "Sew-in Extensions", duration: "4 hours", price: 300 },
    ],
  },
  {
    id: 3,
    name: "Marie A. Cadet",
    specialty: "Master Stylist",
    rating: 5.0,
    image: "/placeholder.svg?height=100&width=100",
    services: [
      { name: "Signature Cut & Style", duration: "2.5 hours", price: 120 },
      { name: "Bridal Package", duration: "4 hours", price: 350 },
      { name: "Hair Consultation", duration: "1 hour", price: 75 },
    ],
  },
]

export default function BookingPage() {
  const [selectedStylist, setSelectedStylist] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState("")
  const [depositAmount, setDepositAmount] = useState(0)

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setDepositAmount(service.price * 0.3) // 30% deposit
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Book Your Appointment</h1>
            <p className="text-xl text-gray-600">Choose your stylist and service to get started</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Booking Form */}
            <div className="space-y-6">
              {/* Step 1: Choose Stylist */}
              <Card className="glass border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-rose-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                      1
                    </span>
                    Choose Your Stylist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {stylists.map((stylist) => (
                      <div
                        key={stylist.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedStylist?.id === stylist.id
                            ? "border-rose-600 bg-rose-50"
                            : "border-gray-200 hover:border-rose-300"
                        }`}
                        onClick={() => setSelectedStylist(stylist)}
                      >
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={stylist.image || "/placeholder.svg"} alt={stylist.name} />
                            <AvatarFallback>
                              {stylist.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-semibold">{stylist.name}</h3>
                            <p className="text-sm text-gray-600">{stylist.specialty}</p>
                            <div className="flex items-center mt-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                              <span className="text-sm font-medium">{stylist.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Step 2: Choose Service */}
              {selectedStylist && (
                <Card className="glass border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="bg-rose-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                        2
                      </span>
                      Choose Your Service
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {selectedStylist.services.map((service, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedService?.name === service.name
                              ? "border-rose-600 bg-rose-50"
                              : "border-gray-200 hover:border-rose-300"
                          }`}
                          onClick={() => handleServiceSelect(service)}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-semibold">{service.name}</h4>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-sm text-gray-600 flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {service.duration}
                                </span>
                                <span className="text-lg font-bold text-rose-600">${service.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Choose Date & Time */}
              {selectedService && (
                <Card className="glass border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="bg-rose-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                        3
                      </span>
                      Choose Date & Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Select Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-transparent"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label>Select Time</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Personal Information */}
              {selectedDate && selectedTime && (
                <Card className="glass border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="bg-rose-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                        4
                      </span>
                      Your Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <Label htmlFor="notes">Special Requests (Optional)</Label>
                      <Textarea id="notes" placeholder="Any special requests or notes for your stylist..." />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Booking Summary */}
            <div className="lg:sticky lg:top-24 h-fit">
              <Card className="glass border-0">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedStylist && (
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={selectedStylist.image || "/placeholder.svg"} alt={selectedStylist.name} />
                        <AvatarFallback>
                          {selectedStylist.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{selectedStylist.name}</p>
                        <p className="text-sm text-gray-600">{selectedStylist.specialty}</p>
                      </div>
                    </div>
                  )}

                  {selectedService && (
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{selectedService.name}</span>
                        <span className="font-bold">${selectedService.price}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {selectedService.duration}
                      </div>
                    </div>
                  )}

                  {selectedDate && selectedTime && (
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">Date</span>
                        <span>{format(selectedDate, "PPP")}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Time</span>
                        <span>{selectedTime}</span>
                      </div>
                    </div>
                  )}

                  {depositAmount > 0 && (
                    <div className="border-t pt-4">
                      <div className="bg-rose-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <DollarSign className="w-5 h-5 text-rose-600 mr-2" />
                          <span className="font-semibold text-rose-800">Deposit Required</span>
                        </div>
                        <p className="text-sm text-rose-700 mb-3">
                          A 30% deposit is required to secure your appointment
                        </p>
                        <div className="flex justify-between items-center">
                          <span>Deposit Amount:</span>
                          <span className="font-bold text-lg">${depositAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-600">
                          <span>Remaining Balance:</span>
                          <span>${(selectedService.price - depositAmount).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button
                    className="w-full bg-rose-600 hover:bg-rose-700 mt-6"
                    size="lg"
                    disabled={!selectedStylist || !selectedService || !selectedDate || !selectedTime}
                  >
                    {depositAmount > 0 ? `Pay Deposit & Book ($${depositAmount.toFixed(2)})` : "Book Appointment"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
