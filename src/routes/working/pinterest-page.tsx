import { FlexWrapper } from "@component/FlexWrapper";

import randomImage from "@asset/image-001.jpg";

export function PinterestPage() {
  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding={false}
    >
      <div className="grid grid-cols-[56px_1fr] font-geist relative">
        <FakeLeftMenu />

        <div className="col-span-1 p-4 flex flex-col gap-4">
          <Searcher />

          <div className="grid grid-cols-[32px_2fr_1fr] gap-4">
            <div className="col-span-1 rounded-full bg-gray-300 w-6 h-6 hover:outline-8 hover:outline-gray-100 cursor-pointer"></div>

            <div className="col-span-1 flex flex-col gap-6">
              <ContentSelected />

              <div className="grid grid-cols-2 gap-6">
                {...Array(6).fill(0).map((_item, index) => (
                  <FakePost key={index} />
                ))}
              </div>
            </div>

            <div className="col-span-1 flex flex-col gap-6">
              {...Array(6).fill(0).map((_item, index) => (
                <FakePost key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </FlexWrapper >
  );
}

function FakePost() {
  return (
    <div className="flex flex-col gap-2">
      <img
        className="rounded-[10px]"
        src={randomImage}
        alt="random image"
      />
      <p className="text-sm">a random post</p>
    </div>
  );
}

function ContentSelected() {
  return (
    <div className="h-fit px-4 py-3 border-1 border-solid border-gray-300 rounded-[10px] flex flex-col gap-4">
      <FakeTopContent />

      <img
        className="rounded-[10px]"
        src={randomImage}
        alt="random image"
      />

      <hr className="border-1 border-gray-200 border-solid" />

      <p>No comments</p>

      <div className="flex gap-2 border-1 border-solid border-gray-200 py-2 px-4 rounded-full">
        <input className="w-full outline-none" type="text" placeholder="add a comment to start a conversation" />

        <div className="flex gap-3">
          <FakeLogo />
          <FakeLogo />
          <FakeLogo />
        </div>
      </div>
    </div>
  );
}

function FakeTopContent() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-6 items-center">
        <FakeIconNumber />
        <FakeLogo />
        <FakeLogo />
        <FakeLogo />
      </div>

      <div className="flex gap-2">
        <p className="w-fit h-fit py-2 px-4 rounded-full cursor-pointer hover:bg-gray-100">Design</p>
        <p className="w-fit h-fit py-2 px-4 bg-night text-white rounded-full cursor-pointer">Saved</p>
      </div>
    </div>
  );
}

function FakeIconNumber() {
  return (
    <span className="cursor-pointer flex gap-3 items-center w-fit">
      <FakeLogo />
      <p>99</p>
    </span>
  );
}

function Searcher() {
  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-3 bg-gray-100 rounded-[10px] py-2 px-3 w-full hover:bg-gray-200">
        <div className="rounded-full bg-gray-300 w-4 h-4 cursor-pointer"></div>
        <input className="outline-none" type="text" placeholder="Search" />
      </div>

      <div className="flex items-center gap-2">
        <FakeAvatar />
        <FakeIcon />
      </div>
    </div>
  );
}

function FakeIcon() {
  return (
    <div className="rounded-full bg-gray-300 w-4 h-4 hover:outline-4 hover:outline-gray-100 cursor-pointer"></div>
  );
}

function FakeAvatar() {
  return (
    <div className="rounded-full bg-gray-300 w-8 h-8 hover:outline-6 hover:outline-gray-100 cursor-pointer"></div>
  );
}

function FakeLogo() {
  return (
    <div className="rounded-full bg-gray-300 w-6 h-6 hover:outline-8 hover:outline-gray-100 cursor-pointer"></div>
  );
}

function FakeLeftMenu() {
  return (
    <div className="col-span-1 border-r-1 border-solid border-gray-300 flex flex-col justify-between items-center py-6">
      <div className="flex gap-6 flex-col">
        <FakeLogo />
        <FakeLogo />
        <FakeLogo />
        <FakeLogo />
        <FakeLogo />
        <FakeLogo />
      </div>

      <div className="rounded-full bg-gray-300 w-6 h-6 hover:outline-8 hover:outline-gray-100 cursor-pointer"></div>
    </div>
  );
}
