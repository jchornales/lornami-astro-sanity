import { inputFormFields } from "@/lib/constants/formFields";
import { Button } from "@/lib/ui/button";
import { Card, CardContent } from "@/lib/ui/card";
import { Input } from "@/lib/ui/input";
import { Label } from "@/lib/ui/label";
import { Textarea } from "@/lib/ui/textarea";

function ContactForm() {
  return (
    <Card className="w-full max-w-lg shadow-lg">
      <CardContent className="p-10">
        <form className="grid grid-cols-4 gap-5 font-montserrat tracking-wider">
          {inputFormFields.map(
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
                  <Textarea placeholder={placeholder} className={inputClass} />
                ) : (
                  <Input
                    type={type}
                    id={name}
                    placeholder={placeholder}
                    className={inputClass}
                    required
                  />
                )}
              </div>
            ),
          )}

          <div className="submit-wrapper col-span-4">
            <Button className="w-full p-6">Send message</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactForm;
