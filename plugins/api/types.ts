export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      user: {
        Row: {
          avatar: string | null
          full_name: string | null
          id: string | null
          username: string | null
        }
        Insert: {
          avatar?: never
          full_name?: never
          id?: string | null
          username?: never
        }
        Update: {
          avatar?: never
          full_name?: never
          id?: string | null
          username?: never
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
