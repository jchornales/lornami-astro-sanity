import {
  MessageFormSchema,
  type MessageFormData,
} from "@/lib/schema/ContactFormSchema";
import { Button } from "@/lib/ui/button";
import { Card, CardContent } from "@/lib/ui/card";
import { Input } from "@/lib/ui/input";
import { Label } from "@/lib/ui/label";
import { Textarea } from "@/lib/ui/textarea";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputFormFields } from "@/lib/constants/formFields";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<MessageFormData>({
    mode: "all",
    resolver: zodResolver(MessageFormSchema),
  });
  const [isSending, setIsSending] = useState<boolean>(false);

  const onSubmit: SubmitHandler<MessageFormData> = (data) => {
    if (data) {
      setIsSending(true);

      setTimeout(() => {
        setIsSending(false);
        toast.success("Message has been sent", {
          className: "!bg-green-200",
          description: "Redirecting to home page",
          duration: 5000,
        });
      }, 4000);

      setTimeout(() => {
        window.location.href = window.location.origin;
      }, 8000);
    }
    if (errors) {
      console.log(errors);
    }
  };

  return (
    <Card className="w-full max-w-lg shadow-lg">
      <CardContent className="p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-4 gap-5 font-montserrat tracking-wider"
        >
          {InputFormFields.map(
            ({
              label,
              name,
              type,
              className,
              isTextArea,
              placeholder,
              inputClass,
            }) => (
              <div key={name} className={`form-group ${className}`}>
                <Label htmlFor={name}>{label}</Label>
                {isTextArea ? (
                  <Textarea
                    placeholder={placeholder}
                    className={inputClass}
                    {...register(name)}
                  />
                ) : (
                  <Input
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    className={inputClass}
                    {...register(name)}
                  />
                )}
                {errors[name] && (
                  <p className="text-xs text-red-500">{errors[name].message}</p>
                )}
              </div>
            ),
          )}

          <div className="submit-wrapper col-span-4">
            <Button
              type="submit"
              className="w-full p-6"
              disabled={isSending || isSubmitSuccessful ? true : false}
            >
              {isSending ? (
                <>
                  <Loader2 className="animate-spin" />
                  <span>Sending message...</span>
                </>
              ) : (
                <span>Send message</span>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactForm;
