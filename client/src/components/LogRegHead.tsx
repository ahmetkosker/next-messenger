import Image from "next/image";
import { BsMessenger } from "react-icons/bs";

function LogRegHead({ title }: { title: string }) {
  return (
    <section className="flex flex-col items-center gap-y-8">
      <div className="text-sky-600">
        <Image src="/images/logo.png" width={50} height={50} alt="Logo" />
      </div>
      <div className="text-white font-extrabold text-3xl dark:text-gray-800">
        {title}
      </div>
    </section>
  );
}

export default LogRegHead;
