import {
    Star,
    Calendar,
    ChevronDownIcon,
    CircleIcon,
    PlusIcon,
    ExternalLink,
  } from "lucide-react"

import { Button } from "@components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
import { Separator } from "@components/ui/separator"

  export async function SearchResult() {
    return (

      <Card className="grid w-full gap-2">
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle>/ Document 1</CardTitle>
            <CardDescription>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ex auctor mauris posuere malesuada. Vivamus nulla urna, egestas sed lectus sit amet, tincidunt tempor enim."
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
            <Button variant="secondary" className="px-3 shadow-none">
              <ExternalLink className="mr-2 h-4 w-4" />
              Star
            </Button>
            <Separator orientation="vertical" className="h-[20px]" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="px-2 shadow-none">
                  <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                alignOffset={-5}
                className="w-[200px]"
                forceMount
              >
                <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Future Ideas
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusIcon className="mr-2 h-4 w-4" /> Create List
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              Latest
            </div>
            <div className="flex items-center">
              <Star className="mr-1 h-3 w-3" />
              <Star className="mr-1 h-3 w-3" />
              <Star className="mr-1 h-3 w-3" />
              Relevence
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-3 w-3" />
              Updated April 2023
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }