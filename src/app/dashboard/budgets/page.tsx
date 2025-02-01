import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/dashboard/title";
import { Separator } from "@radix-ui/react-select";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-8 py-8">
      <div className="flex items-center justify-between">
        <Title title="Budgets" />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-4"></div>
        <div className="col-span-8">
          <div className="flex flex-col gap-y-5 bg-white rounded-xl p-8">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-project-green" />
              <h2 className="text-gray-900 text-preset-2">Entertainment</h2>
            </div>
            <div></div>
            <div className="flex flex-col gap-y-5 bg-stone-200 rounded-xl p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-gray-900 text-preset-3">Latest Spending</h2>
                <Button variant="ghost">See All</Button>
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="" alt="James Thompson" />
                      <AvatarFallback>JT</AvatarFallback>
                    </Avatar>
                    <p className="text-gray-900 text-preset-5-bold">James Thompson</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900 text-preset-5-bold">-$5.00</p>
                    <p className="text-gray-500 text-preset-5">11 Aug 2024</p>
                  </div>
                </div>
                <Separator className="h-[1px] bg-gray-500" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="" alt="James Thompson" />
                      <AvatarFallback>JT</AvatarFallback>
                    </Avatar>
                    <p className="text-gray-900 text-preset-5-bold">James Thompson</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900 text-preset-5-bold">-$5.00</p>
                    <p className="text-gray-500 text-preset-5">11 Aug 2024</p>
                  </div>
                </div>
                <Separator className="h-[1px] bg-gray-500" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="" alt="James Thompson" />
                      <AvatarFallback>JT</AvatarFallback>
                    </Avatar>
                    <p className="text-gray-900 text-preset-5-bold">James Thompson</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900 text-preset-5-bold">-$5.00</p>
                    <p className="text-gray-500 text-preset-5">11 Aug 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}