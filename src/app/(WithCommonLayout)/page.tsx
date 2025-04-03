import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/services/AuthService";

const HomePage = async () => {
  const user = await getCurrentUser();

  console.log(user);

  return (
    <div>
      <Button>Click me</Button>
      Home page
    </div>
  );
};

export default HomePage;
