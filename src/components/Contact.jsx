import React from 'react';
import styles, { layout } from '../style';

const Contact = () => {
  return (
    <section className={layout.section} id="contact">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className={`${styles.heading2} text-gradient`}>Let's Chat!</h2>
          <p className={styles.paragraph}>
            Reach out and drop a line, let's have a call about your perfect
            website and bhow I can help it grow
          </p>
        </div>
        <form
          className="lg:w-1/2 md:w-2/3 mx-auto"
          name="contact"
          method="post"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className={styles.paragraph2}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className={styles.paragraph2}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="message" className={styles.paragraph2}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                value="Submit message"
                className={`flex mx-auto py-4 px-4 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
              >
                {' '}
                Drop a line
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className={styles.paragraph}>mikefox17@gmail.com</a>
              <p className={styles.paragraph2}>
                Full Stack Developer
                <br />
                Specialized in building small businesses
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
