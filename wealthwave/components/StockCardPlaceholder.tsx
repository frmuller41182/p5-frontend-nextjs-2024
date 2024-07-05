import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const StockCardPlaceholder = () => {
  return (
    <Card className="max-w-xs shadow-lg rounded-lg animate-pulse">
      <CardHeader className="flex items-center space-x-4">
        <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
        <div>
          <CardTitle className="text-lg font-bold bg-gray-300 h-6 w-32 rounded"></CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm bg-gray-300 h-4 w-24 rounded my-2"></p>
        <p className="text-sm bg-gray-300 h-4 w-16 rounded my-2"></p>
        <p className="text-sm bg-gray-300 h-12 rounded"></p>
      </CardContent>
    </Card>
  );
};

export default StockCardPlaceholder;
