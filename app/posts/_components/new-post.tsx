"use client";

import { createPost } from "../_actions/actions";
import { useActionState } from "react";

const initialValue: FormState = { error: "", success: "" };

export default function NewPostForm() {
  const [state, formAction] = useActionState(createPost, initialValue);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md border"
    >
      <input
        name="title"
        placeholder="Título do post"
        required
        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-800"
      />
      <textarea
        name="content"
        placeholder="Conteúdo"
        required
        className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-800"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        Criar Post
      </button>
      {state?.error && <p className="text-red-500">{state.error}</p>}
      {state?.success && <p className="text-green-500">{state.success}</p>}
    </form>
  );
}
