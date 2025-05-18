import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function Gpus() {
  const response = await fetch('http://api:5000/api/v1/gpus')
  const json = await response.json()
  const gpus: any[] = json.data
  return (
    <div>
      {gpus.map((gpu: any) => (
        <Card key={gpu._id}>
          <CardContent className="flex flex-row gap-4">
            <div className="w-1 bg-green-500"></div>
            <div>
              <p><strong>{gpu.brand} {gpu.model}</strong></p>
              <div className="flex flex-row gap-8">
                <span>{gpu.memory_size}</span>
                <span>{gpu.boost_clock}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}