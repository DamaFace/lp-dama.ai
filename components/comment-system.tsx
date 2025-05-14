"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Trash2, Edit, Save, X } from "lucide-react"

export interface CommentType {
  id: string
  postId: string
  name: string
  content: string
  date: string
}

interface CommentSystemProps {
  postId: string
}

export default function CommentSystem({ postId }: CommentSystemProps) {
  const [comments, setComments] = useState<CommentType[]>([])
  const [newComment, setNewComment] = useState({ name: "", content: "" })
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editContent, setEditContent] = useState("")

  // Carregar comentários do localStorage
  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${postId}`)
    if (storedComments) {
      setComments(JSON.parse(storedComments))
    }
  }, [postId])

  // Salvar comentários no localStorage quando houver mudanças
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem(`comments-${postId}`, JSON.stringify(comments))
    }
  }, [comments, postId])

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.name.trim() || !newComment.content.trim()) return

    const comment: CommentType = {
      id: Date.now().toString(),
      postId,
      name: newComment.name,
      content: newComment.content,
      date: new Date().toLocaleDateString("pt-BR"),
    }

    setComments([...comments, comment])
    setNewComment({ name: "", content: "" })
  }

  const handleDeleteComment = (id: string) => {
    const updatedComments = comments.filter((comment) => comment.id !== id)
    setComments(updatedComments)

    if (updatedComments.length === 0) {
      localStorage.removeItem(`comments-${postId}`)
    }
  }

  const startEditing = (comment: CommentType) => {
    setEditingId(comment.id)
    setEditContent(comment.content)
  }

  const cancelEditing = () => {
    setEditingId(null)
    setEditContent("")
  }

  const saveEdit = (id: string) => {
    if (!editContent.trim()) return

    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, content: editContent } : comment,
    )

    setComments(updatedComments)
    setEditingId(null)
    setEditContent("")
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-bold mb-4">Comentários ({comments.length})</h3>

      {comments.length > 0 ? (
        <div className="space-y-6 mb-8">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                  {comment.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <h4 className="font-medium mr-2">{comment.name}</h4>
                      <span className="text-xs text-gray-500">{comment.date}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => startEditing(comment)}
                        className="text-gray-500 hover:text-[#fa1571] transition-colors"
                        aria-label="Editar comentário"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                        aria-label="Excluir comentário"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  {editingId === comment.id ? (
                    <div>
                      <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fa1571] min-h-[80px] text-sm"
                      />
                      <div className="flex justify-end space-x-2 mt-2">
                        <button
                          onClick={cancelEditing}
                          className="p-1 text-gray-500 hover:text-gray-700"
                          aria-label="Cancelar edição"
                        >
                          <X size={16} />
                        </button>
                        <button
                          onClick={() => saveEdit(comment.id)}
                          className="p-1 text-[#fa1571] hover:text-[#d8a8a1]"
                          aria-label="Salvar edição"
                        >
                          <Save size={16} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-700">{comment.content}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mb-6">Seja o primeiro a comentar!</p>
      )}

      <div>
        <h4 className="font-medium mb-3">Deixe seu comentário</h4>
        <form onSubmit={handleSubmitComment} className="space-y-3">
          <input
            type="text"
            value={newComment.name}
            onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
            placeholder="Seu nome"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fa1571]"
            required
          />
          <textarea
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            placeholder="Escreva seu comentário..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fa1571] min-h-[120px]"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#fa1571] text-white rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Enviar comentário
          </button>
        </form>
      </div>
    </div>
  )
}
