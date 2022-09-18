export default function chat({company}) {
  return (
<body className="flex min-h-screen w-screen flex-col items-center justify-center bg-gray-100 p-10 text-gray-800">
      <div className="flex w-full max-w-xl flex-grow flex-col overflow-hidden rounded-lg bg-white shadow-xl">
        <div className="flex h-0 flex-grow flex-col overflow-auto p-4">
          {/* <div className="mt-2 flex w-full max-w-xs space-x-3">
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>
            <div>
              <div className="rounded-r-lg rounded-bl-lg bg-gray-300 p-3">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <span className="text-xs leading-none text-gray-500">
                2 min ago
              </span>
            </div>
          </div> */}
          {/* <div className="mt-2 ml-auto flex w-full max-w-xs justify-end space-x-3">
            <div>
              <div className="rounded-l-lg rounded-br-lg bg-blue-600 p-3 text-white">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
              <span className="text-xs leading-none text-gray-500">
                2 min ago
              </span>
            </div>
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>
          </div> */}
          {/* <div className="mt-2 ml-auto flex w-full max-w-xs justify-end space-x-3">
            <div>
              <div className="rounded-l-lg rounded-br-lg bg-blue-600 p-3 text-white">
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-xs leading-none text-gray-500">
                2 min ago
              </span>
            </div>
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>
          </div> */}
          {/* <div className="mt-2 flex w-full max-w-xs space-x-3">
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>
            <div>
              <div className="rounded-r-lg rounded-bl-lg bg-gray-300 p-3">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
                </p>
              </div>
              <span className="text-xs leading-none text-gray-500">
                2 min ago
              </span>
            </div>
          </div> */}
          {/* <div className="mt-2 ml-auto flex w-full max-w-xs justify-end space-x-3">
            <div>
              <div className="rounded-l-lg rounded-br-lg bg-blue-600 p-3 text-white">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
                </p>
              </div>
              <span className="text-xs leading-none text-gray-500">
                2 min ago
              </span>
            </div>
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>
          </div> */}
          {/* <div className="mt-2 ml-auto flex w-full max-w-xs justify-end space-x-3">
            <div>
              <div className="rounded-l-lg rounded-br-lg bg-blue-600 p-3 text-white">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <span className="text-xs leading-none text-gray-500">
                2 min ago
              </span>
            </div>
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>
          </div> */}
          {/* <div className="mt-2 ml-auto flex w-full max-w-xs justify-end space-x-3">
            <div>
              <div className="rounded-l-lg rounded-br-lg bg-blue-600 p-3 text-white">
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-xs leading-none text-gray-500">
                2 min ago
              </span>
            </div>
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>
          </div> */}
          <div className="mt-2 flex w-full max-w-xs space-x-3">
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>
            <div>
              <div className="rounded-r-lg rounded-bl-lg bg-gray-300 p-3">
                <p className="text-sm">
                  {`Hi! This is 0xBerliner from  ${company}. I take these async but I won't take too long. What's up?`}
                </p>
              </div> 
              <span className="text-xs leading-none text-gray-500">
                2 min ago
              </span>
            </div>
          </div>
          {/* <div className="mt-2 ml-auto flex w-full max-w-xs justify-end space-x-3">
            <div>
              <div className="rounded-l-lg rounded-br-lg bg-blue-600 p-3 text-white">
                <p className="text-sm">Lorem ipsum dolor sit.</p>
              </div>
              <span className="text-xs leading-none text-gray-500">
                2 min ago
              </span>
            </div>
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"></div>
          </div> */}
        </div>

        <div className="bg-gray-300 p-4">
          <input
            className="flex h-10 w-full items-center rounded px-3 text-sm"
            type="text"
            placeholder="Type your message…"
          />
        </div>
      </div>
    </body>
  )
}
