<template>
  <div class="flex flex-col md:flex-row justify-between container max-w-7xl px-6 mx-auto border-t py-8">
    <nav class="pb-4 md:pb-0">
      <ul
        class="flex pb-2
      "
      >
        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li
          class="mx-2"
          aria-hidden="true"
        >
          /
        </li>
        <li>
          <router-link to="/work">
            Work
          </router-link>
        </li>
        <li
          class="mx-2"
          aria-hidden="true"
        >
          /
        </li>
        <li>
          <router-link to="/about">
            About
          </router-link>
        </li>
        <li
          class="mx-2"
          aria-hidden="true"
        >
          /
        </li>
        <li>
          <a href="mailto:test@test.com">
            Contact
          </a>
        </li>
      </ul>
      <ul
        class="flex
      "
      >
        <li class="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </li>
        <li>
          <a
            href=""
            target="_blank"
            rel="noopener"
          >Linkedin</a>
        </li>
        <li
          class="mx-2"
          aria-hidden="true"
        >
          /
        </li>
        <li>
          <a
            href=""
            target="_blank"
            rel="noopener"
          >Dribbble</a>
        </li>
      </ul>
    </nav>

    <div>
      <div class="flex md:justify-end items-center pb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg> London, UK
      </div>
      <div>© {{ new Date().getFullYear() }} Gabriel Quinton</div>
    </div>
  </div>
</template>