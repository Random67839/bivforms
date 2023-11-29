"use client";

import Header from "./components/ui/header";
import Footer from "./components/ui/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <article>
        <section className="bg-[url('/icon/blue-bg.svg/')] bg-cover bg-center">
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
            <div className="mx-auto max-w-2xl">
              <h1 className="p-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                Bittivirta Forms
              </h1>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 py-4 lg:gap-8 xl:grid-cols-3">
              <div className="rounded-lg bg-primary-100 p-4 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                <h2 className="text-3xl font-extrabold leading-tight">
                  Hassle-free
                </h2>
                <span className="text-primary-500 dark:text-primary-400">
                  <p>
                    Streamline your data collection process with Bittivirta
                    Forms, the software that works anywhere on every device. No
                    more paper forms or a need to digitize them. You can get
                    your forms up and running in minutes.
                  </p>
                </span>
              </div>
              <div className="rounded-lg bg-primary-100 p-4 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                <h2 className="text-3xl font-extrabold leading-tight">
                  Works everywhere
                </h2>
                <span className="text-primary-500 dark:text-primary-400">
                  <p>
                    Bittivirta forms works everywhere, on premises or in online.
                    Take your data collection to the next level with Bittivirta
                    Forms, to collect data just send a link to the customer or
                    by having a tablet on site.
                  </p>
                </span>
              </div>
              <div className="rounded-lg bg-primary-100 p-4 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                <h2 className="text-3xl font-extrabold leading-tight">
                  Privacy first
                </h2>
                <span className="text-primary-500 dark:text-primary-400">
                  <p>
                    Bittivirta Forms is built with privacy in mind, we
                    don&apos;t collect any excess data from your customers. You
                    can choose to host your data on your own server or use our
                    cloud service. We don&apos;t use any third-party analytics
                    when customer is filling the form.
                  </p>
                </span>
              </div>
              <div className="rounded-lg bg-primary-100 p-4 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                <h2 className="text-3xl font-extrabold leading-tight">
                  GDPR compliant statistics for everyone
                </h2>
                <span className="text-primary-500 dark:text-primary-400">
                  <p>
                    Bittivirta Forms provides you with GDPR compliant
                    statistics, you can see your data in real-time and export it
                    in JSON. With real-time data you can share them with your
                    colleagues.
                  </p>
                </span>
              </div>
              <div className="rounded-lg bg-primary-100 p-4 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                <h2 className="text-3xl font-extrabold leading-tight">
                  Easy to use
                </h2>
                <span className="text-primary-500 dark:text-primary-400">
                  <p>
                    Filling forms have never been easier, with Bittivirta Forms.
                    For on premise solution customer friendly interface is
                    appealing, modern and easy to use. For cloud solution you
                    can use your own domain name and logo. Just fork the
                    project, but keep in mind the MIT license.
                  </p>
                </span>
              </div>
              <div className="rounded-lg bg-primary-100 p-4 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                <h2 className="text-3xl font-extrabold leading-tight">
                  Open source
                </h2>
                <span className="text-primary-500 dark:text-primary-400">
                  <p>
                    This project is open source with MIT license. If you find
                    something that you would like to implement or fix, please
                    create a pull request or make a fork of this project. With
                    the MIT license you can use this project for commercial
                    purposes for self hosted version
                  </p>
                </span>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </article>
    </main>
  );
}
