import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function Swish() {
    const items = [
        "Verify Phone Number", "Select account and settings", "Control and confirm"
    ];
  return (
      <>
          <p className="mb-6 text-2xl">Order Swish</p>
          <div className="flex justify-center items-start min-h-screen ">
              <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-6 rounded-lg shadow-md col-span-2 text-left">
                      <h2 className="text-md font-medium mb-5 uppercase text-gray-500">to order swish</h2>
                      <div className="flex flex-col gap-4 border-b-2">
                          <ul className="marker:text-blue-800 marker:text-2xl list-disc pl-5 space-y-3 ">
                              {items.map((item) => (
                                  <li className="marker:blue-500">{item}</li>
                              ))}
                          </ul>
                          <button
                              className="mt-4 mb-4 bg-blue-500 text-white py-2 px-4 rounded-xl text-center w-1/4 self-center">Continue
                          </button>

                      </div>

                      <div className="flex flex-col gap-4">
                          <Accordion type="multiple">
                              {items.map((item, index) => (
                              <AccordionItem value={'value'+index} >
                                  <AccordionTrigger className="bg-white">{item}</AccordionTrigger>
                                  <AccordionContent>
                                      {item + 1}
                                  </AccordionContent>
                              </AccordionItem>
                          ))}
                          </Accordion>

                      </div>

                      </div>


                      <div className="flex flex-col gap-4 col-span-1">
                          {items.map((item, index) => (

                              <div className="flex items-center">
                          <span
                              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-400 text-white">{index + 1}</span>
                                  <span className="ml-2">{item}</span>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </>
          );
          }