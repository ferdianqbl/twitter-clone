import Button from "./Button";

export default function NewTweetForm() {
  return (
    <form action="" className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        {/* <ProfileImage src="#url" /> */}
        <textarea
          className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
          name=""
          id=""
          placeholder="What's happening?"
        />
      </div>
      <Button>Tweet</Button>
    </form>
  );
}
