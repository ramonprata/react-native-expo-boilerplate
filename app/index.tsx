import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a Tab Home no load inicial
    router.replace("/home");
  }, [router]);

  return null;
}
