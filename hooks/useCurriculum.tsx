import { GradeType } from "@/types/GradeWithDetails";
import { useEffect, useState, useCallback } from "react";


export function useCurriculum() {
  const [data, setData] = useState<GradeType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCurriculum = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/curriculum");

      if (!res.ok) {
        throw new Error("Failed to fetch curriculum");
      }

      const json: GradeType[] = await res.json();
      setData(json);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCurriculum();
  }, [fetchCurriculum]);

  return {
    data,
    loading,
    error,
    refresh: fetchCurriculum,
  };
}
