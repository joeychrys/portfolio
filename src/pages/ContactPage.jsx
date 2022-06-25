import React from 'react';

const data = [
  { id: 0, label: 'What is your name?', placeHolder: 'John Doe *', type: 'text', position: '01' },
  {
    id: 1,
    label: "What's your email?",
    placeHolder: 'john@doe.com *',
    type: 'text',
    position: '02',
  },
  {
    id: 2,
    label: "What's the name of your organization?",
    placeHolder: 'John & Doe ®',
    type: 'text',
    position: '03',
  },
  {
    id: 3,
    label: 'What services are you looking for?',
    placeHolder: 'Web Development, Design...',
    type: 'text',
    position: '04',
  },
  {
    id: 4,
    label: 'Your message',
    placeHolder: 'Hey Joey, I need help with...',
    type: 'text',
    position: '05',
  },
];

const ContactPage = () => {
  return (
    <>
      <div className="container flex flex-col px-6 pt-40 pb-20 mx-auto">
        <h1 className="max-w-screen-sm text-6xl">Let's start a project together</h1>
      </div>
      <div className="container flex flex-col px-6 mx-auto sm:flex-row ">
        <form className="w-2/3 py-20">
          {data.map((item) => (
            <div key={item.id} className="flex justify-start border-t group">
              <h1 className="flex px-6 text-sm text-gray-500 place-items-center">
                {item.position}
              </h1>
              <div className="flex flex-col m-6 space-y-6">
                <label htmlFor="floating_password" className="text-xl">
                  {item.label}
                </label>
                <input
                  type={item.type}
                  name="floating_password"
                  className="outline-none"
                  placeholder={item.placeHolder}
                />
              </div>
            </div>
          ))}
        </form>
        <div className="flex flex-col w-1/3 py-20 place-items-end">
          <div className="w-1/2 space-y-1 text-start">
            <h1 className="text-xs text-gray-500">Contact Details</h1>
            <h2>info@joeychrys.com</h2>
            <h2>+1 234 5678</h2>
          </div>
          <div className="w-1/2 mt-6 space-y-1 text-start">
            <h1 className="text-xs text-gray-500">Business Details</h1>
            <h2>Location: Dallas Texas</h2>
          </div>
          <div className="w-1/2 mt-6 space-y-1 text-start">
            <h1 className="text-xs text-gray-500">Socials</h1>
            <h2>LinkedIn</h2>
            <h2>Instagram</h2>
            <h2>Github</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
