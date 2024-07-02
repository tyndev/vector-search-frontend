import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  } from "@/components/ui/card"

  import { Quote } from "lucide-react"

export default function SearchResult({ result }: any) {
  return (
        <Card className="m-4">
          <CardHeader>
            <CardTitle>PRC-00{result.id}: {result.title}</CardTitle>
            <p className="text-sm">
                A standard that mandates the testing and maintenance of protection system components to ensure the reliability of the bulk electric system. It outlines specific intervals and procedures for inspecting, testing, and maintaining protective relays, batteries, and associated communication systems.
            </p>
        </CardHeader>
        <CardContent className="grid gap-8 mx-4">
            <div className="grid gap-1">
                <p className="text-sm font-medium leading-none"><Quote className="inline mr-2 scale-75"/>Page {result.id*2}</p>
                <p className="text-sm text-muted-foreground">{result.body}</p>
            </div>
            <div className="grid gap-1">
                <p className="text-sm font-medium leading-none"><Quote className="inline mr-2 scale-75"/>Page {result.id*2 + 3}</p>
                <p className="text-sm text-muted-foreground">{result.body}</p>
            </div>
        </CardContent>
    </Card>
  );
};
