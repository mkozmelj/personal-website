export function Contact() {
  return (
    <div className="mt-10 px-4 lg:p-0 flex flex-col">
      <div className="font-thin text-sm text-center px-8 lg:px-4">
        If you find my profile interesting and want to get in touch with me, do
        not hesitate, click on the button bellow and let&apos;s get to know each
        other!
      </div>
      <a
        className="bg-primary/50 hover:bg-primary/30 hover:cursor-pointer text-white font-bold py-2 px-4 rounded-xl m-auto mt-5 lg:mt-10"
        href="mailto:martin@kozmelj.si"
      >
        Get in touch
      </a>
    </div>
  );
}
