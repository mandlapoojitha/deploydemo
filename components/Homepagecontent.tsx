import React from "react";

const Homepagecontent = () => {
  return (
    <div className="w-full  flex justify-center items-center mb-10">
      <div className="w-4/5 h-full">
        <h1 className="text-3xl font-bold mt-8 mb-4">Why DevByteHub ?</h1>
        <img
          className="cursor-pointer mt-4"
          src={`./blogimg.webp`}
          alt="no image"
        />
        <p className="font-medium text-base mt-8">
          Irrespective of whether you are a frontend, backend, or full-stack
          developer, blogging is one of the best approaches you can use to
          bolster your reputation.

          With blogging, you can share skills you have gained over the years and
          become better at developing as you practice what you already know.

         
        </p>
       
        <h2 className="font-semibold text-lg mt-8"> Why Should You Blog as a Developer?</h2>
        <h3 className="font-bold text-base mt-4">You become better at writing</h3>
        <p className="font-medium text-base mt-2">
          A typical organization will have project managers, designers, and
          developers. You can also be working for another end client. We also
          live in a digital world where most developers work and collaborate
          remotely.

          Some of the projects you will be working on also need documentation.
          Writing comments on your code is also essential to help others
          understand your code.

          As a developer, you need to learn how to communicate with other people
          effectively when working on your projects. Luckily, writing often
          improves your communication skills. Blogging will teach you how to
          write both detailed and short messages easily.
        </p>
        <h3 className="font-bold text-base mt-4">Get opinions from others</h3>
        <p className="font-medium text-base mt-2">
          You may have created an application that will ‘change’ the world. You
          may also have created a new library and would not mind other people
          utilizing it.

          When you blog about such an idea, you will likely get free feedback
          from various users. The best idea is by;
        </p>
        <ul className="font-medium text-base mt-2">
          <li>State the Problem statement</li>
          <li>Explain the solution</li>
          <li>Explain the development process</li>
          <li>Explain the challenges</li>
        </ul>
        <p className="font-medium text-base mt-2">
          Once you have done all this, you can provide your deployed link/
          source code for people to test your solution.

          Remember to tell people to leave a comment and review your work. If it
          is a solo project, you can even welcome contributors.
        </p>
        <h3 className="font-bold text-base mt-4">You can create a community</h3>
        <p className="font-medium text-base mt-2">
          Some self-taught developers have role models they always look up to.
          For instance, you can find that there is always that developer you
          always visit his blog or channel when you want to learn Python, and
          you may also find another person for all JavaScript-related issues.

          It all starts somewhere, and blogging is an awesome approach. You can
          ensure that your blog at least 80% of the new things you learn and
          create a following steadily.

          Encourage people to follow your handle and get updates whenever you
          publish a new post. Be consistent in blogging and always give people
          something to look up to.
        </p>
        <h3 className="font-bold text-base mt-4">Sell your services and create a portfolio</h3>
        <p className="font-medium text-base mt-2">
          Being a good developer and winning clients are two different things.
          You need to learn how to market yourself, irrespective of whether you
          want to be an independent contractor or employed as a software
          engineer.
        </p>
        <p className="font-medium text-base mt-2">
          A good blog will act as a portfolio where potential clients will see
          what you can offer and what you are good at.

          You may not make money during the first few months, but consistency
          will finally pay off. Just pick approaches that suit you best if you
          want to make money.
        </p>
      </div>
    </div>
  );
};

export default Homepagecontent;
