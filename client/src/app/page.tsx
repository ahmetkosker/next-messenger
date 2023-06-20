import Footer from "@/components/Footer/Footer";
import Button from "@/components/FormElements/Button";
import Input from "@/components/FormElements/Input";

export default function Home() {
  return (
    <section className="w-screen h-screen mx-auto my-auto flex justify-center items-center bg-red-600">
      <div>
        <div>
          <Input />
        </div>
        <div>
          <Button />
        </div>
      </div>
    </section>
  );
}
