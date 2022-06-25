import React from 'react';

const data = [
  {
    id: 0,
    title: 'Design',
    content:
      'With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.',
    value: '01',
  },
  {
    id: 1,
    title: 'Development',
    content:
      'I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. For content management I use Kirby CMS.',
    value: '02',
  },
  {
    id: 2,
    title: 'The full package',
    content:
      "A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.",
    value: '03',
  },
];

const AboutPage = () => {
  return (
    <>
      <div className="container relative top-0 flex flex-col px-6 pt-40 pb-20 mx-auto border-b">
        <h1 className="max-w-screen-sm text-6xl">Helping brands thrive in the digital world</h1>
      </div>
      <div className="container flex flex-col-reverse p-6 mx-auto my-20 sm:space-x-6 sm:flex-row sm:justify-between">
        <div className="flex justify-end mt-6 sm:mt-0">
          <h1 className="max-w-sm">
            I help companies from all over the world with tailor-made solutions. With each project,
            I push my work to new horizons, always putting quality first. Always exploring...
          </h1>
        </div>
        <img src="https://images.pexels.com/photos/11987412/pexels-photo-11987412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="placeholder picture of two people on cliff" className="sm:w-1/2" />
      </div>
      <div className="flex flex-col p-6 sm:flex-row sm:container sm:mx-auto sm:space-x-6">
        {data.map((item) => (
          <div key={item.id} className="space-y-6 sm:w-1/3">
            <h1 className="py-6 text-sm text-gray-500 border-b">{item.value}</h1>
            <h1 className="text-3xl">{item.title}</h1>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutPage;
