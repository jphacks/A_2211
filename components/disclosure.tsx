import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const Usage = () => {
  return (
    <div className="w-full pr-4 pt-4">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white  focus:outline-none focus-visible:ring bg-red-300 focus-visible:ring-opacity-75">
                <span>トマトの色は？</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div>期日が近づくほどトマトが赤みがかり、1日前だとちょっと黒ずみます</div>
                <div className="sm:grid sm:grid-cols-2">
                    <div className="my-auto">2週間より前</div>
                    <div>
                    <Image src="/images/tomatoGreen.png" width={50} height={50} />
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-2">
                    <div className="my-auto">〜1週間</div>
                    <div>
                    <Image src="/images/tomatoOrange.png" width={50} height={50} />
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-2">
                    <div className="my-auto">〜5日</div>
                    <div>
                    <Image src="/images/tomatoRedOrange.png" width={50} height={50} />
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-2">
                    <div className="my-auto">〜2日</div>
                    <div>
                    <Image src="/images/tomatoRed.png" width={50} height={50} />
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-2">
                    <div className="my-auto">1日~当日</div>
                    <div>
                    <Image src="/images/tomatoBlack.png" width={50} height={50} />
                    </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white  focus:outline-none focus-visible:ring bg-red-300 focus-visible:ring-opacity-75">
                <span>トマトの大きさは？</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a>トマトの大きさはタスクの優先度で決まります。<br></br>
                優先度は1〜5の数値で、数字が大きいほど優先度が高いものとして入力してください。
                </a>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default Usage