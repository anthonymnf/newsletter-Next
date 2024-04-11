import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="container mt-5">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <a
                href="/#"
                className="mb-6 inline-block max-w-[160px] font-bold uppercase"
              >
                Front-end Insights
              </a>
              <p className="mb-7 text-base text-body-color dark:text-dark-6">
                Sed ut perspiciatis undmnis is iste natus error sit amet
                voluptatem totam rem aperiam.
              </p>
            </div>
          </div>

          <LinkGroup header="Recursos">
            <NavLink link="/" label="Início" />
            <NavLink link="/about" label="Sobre" />
            <NavLink link="/admin/subscribers" label="Inscritos" />
          </LinkGroup>
          <LinkGroup header="Empresa">
            <NavLink link="/#" label="Suporte" />
            <NavLink link="/#" label="Política de privacidade" />
          </LinkGroup>
          <LinkGroup header="Links Rápidos">
            <NavLink link="/#" label="Nossos serviços" />
            <NavLink link="/#" label="Conheça o nosso time" />
          </LinkGroup>

          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                Siga-nos
              </h4>
              <div className="mb-6 flex items-center">
                <a
                  href="https://www.linkedin.com/in/anthony-matheus"
                  target="blank"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full hover:shadow-md hover:shadow-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://github.com/anthonymnf"
                  target="blank"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full hover:shadow-md hover:shadow-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full hover:shadow-md hover:shadow-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full hover:shadow-md hover:shadow-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </a>
              </div>
              <p className="text-base text-body-color dark:text-dark-6">
                &copy; 2024 Anthony Matheus
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};
