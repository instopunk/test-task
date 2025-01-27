import {Input} from "@/components/Input";
import {Button} from "@/components/Button";

export default function LoginPage() {

  return (
    <div>
      <h1>
        Чтобы войти, введите телефон или e-mail
      </h1>
      <div>
        <Input
          type={'text'}
          placeholder={'Телефон или e-mail'}
        />
      </div>
      <div>
        <Button>Войти</Button>
      </div>
    </div>
  );
}
