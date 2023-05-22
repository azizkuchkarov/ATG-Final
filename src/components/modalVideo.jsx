import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import YouTubeEmbed from '@/components/video'

import { Button } from '../components/Button'
import CheckIcon from '@/components/icons/CheckIcon'
import XMarkIcon from '@/components/icons/XMarkIcon'
import PlayPauseIcon from '@/components/icons/PlayPauseIcon'

export default function TestModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        <svg
          aria-hidden="true"
          className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
        >
          <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
        </svg>
        <span className="ml-3">Watch video</span>
      </Button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 min-w-full "
          onClose={setOpen}
        >
          <div className="flex min-h-screen items-center  justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                style={{}}
                className="  embed-responsive relative bottom-0  left-0 right-0 top-0 z-50 h-full w-2/3 overflow-hidden rounded-lg  bg-white p-80   shadow-xl transition-all"
              >
                <YouTubeEmbed />

                {/* <div className="relative mt-2 h-full w-full "> */}
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/* </div> */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
