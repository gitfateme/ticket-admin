import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
// import { useToast } from "@/hooks/use-toast"; // Adjust path to your shadcn toast hook

interface ApiError {
  response?: {
    data?: {
      error?: {
        code: string | number;
        desc: string;
      };
    };
  };
}

export const useApiService = <TData, TVariables>(
  service: (variables: TVariables) => Promise<TData>,
) => {
  // const { toast } = useToast();

  // Local state to store last payload for "retry" functionality
  const [lastVariables, setLastVariables] = useState<TVariables | null>(null);

  const mutation = useMutation({
    mutationFn: service,
    onSuccess: (data) => {
      return data;
      // Logic for global success (like logging) can go here
    },
    onError: (error: ApiError) => {
      const errorData = error.response?.data?.error;
      const errorCode = `apicodes.${errorData?.code}`;

      // Check if translation exists, otherwise use description or default 500
      const errorMessage = errorData?.desc;

      // toast({
      //   title: t("validation.error"),
      //   description: errorMessage,
      //   variant: "destructive",
      // });
    },
  });

  const execute = async (
    variables: TVariables,
    options?: {
      onSuccess?: (data: TData) => void;
      onError?: (err: any) => void;
    },
  ) => {
    setLastVariables(variables);

    // mutateAsync returns a promise, similar to your 'runAsync' logic
    return mutation.mutateAsync(variables, {
      onSuccess: options?.onSuccess,
      onError: options?.onError,
    });
  };

  const retry = () => {
    if (lastVariables !== null) {
      execute(lastVariables);
    }
  };

  return {
    execute,
    retry,
    loading: mutation.isPending, // 'isPending' is the React Query name for 'loading'
    error: mutation.error,
    data: mutation.data,
    reset: mutation.reset,
  };
};
