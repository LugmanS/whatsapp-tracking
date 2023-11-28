"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const FormSchema = z.object({
  trackingType: z.enum(["awb", "courier", "container"], {
    required_error: "Please select an mode of tacking to proceed.",
    invalid_type_error: "Invalid tracking type. Please check.",
  }),
})

const messageConfig = {
  awb: "Send this message to track by AWB number",
  courier: "Send this message to track by Courier number",
  container: "Send this message to track by Container number",
}

export default function TrackingForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    window.open(
      `https://wa.me/916382826393?text=${messageConfig[data.trackingType]}`
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="trackingType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a mode of tracking</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your tracking number type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="awb">AWB Number</SelectItem>
                  <SelectItem value="courier">Courier Number</SelectItem>
                  <SelectItem value="container">Container Number</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full gap-2" type="submit">
          Proceed on Whatsapp
        </Button>
      </form>
    </Form>
  )
}
