import { RegisterFrom } from '@/components/navabr/RegisterFrom';

export default function page() {
  return (
    <div className="flex md:min-h-[92.5vh] lg:min-h-[93vh] flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-5xl">
        <RegisterFrom />
      </div>
    </div>
  );
}
