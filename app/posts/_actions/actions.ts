"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "../../lib/supabase";

export async function createPost(
  prevState: FormState, //não usaremos por enquanto
  formData: FormData
) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title) return { error: "O título é obrigatório!" };

  const { error } = await supabase.from("posts").insert([{ title, content }]);

  console.log("error", error);
  if (error) return { error: "Erro ao criar post." };

  revalidatePath("/posts"); // Atualiza a lista de posts
  return { success: "Post criado com sucesso!" };
}

export async function getPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return [];

  return data;
}

export async function deletePost(postId: string) {
  console.log("postId", postId);

  const { error } = await supabase.from("posts").delete().eq("id", postId);

  if (error) {
    console.error("Erro ao deletar o post:", error.message);
    return { error: "Não foi possível deletar o post." };
  }
  revalidatePath("/posts"); // Atualiza a lista de posts
}
