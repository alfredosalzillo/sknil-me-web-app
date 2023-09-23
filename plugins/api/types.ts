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
      link: {
        Row: {
          active: boolean | null
          created_at: string | null
          id: string
          name: string
          ordinal: number | null
          updated_at: string | null
          url: string
          user_id: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          name: string
          ordinal?: number | null
          updated_at?: string | null
          url: string
          user_id?: string
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          id?: string
          name?: string
          ordinal?: number | null
          updated_at?: string | null
          url?: string
          user_id?: string
        }
        Relationships: []
      }
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
      max_link_ordinal: {
        Args: {
          user_id: string
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
