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
      links_stats_log: {
        Row: {
          action: string
          browser: string | null
          country_code: string | null
          created_at: string
          device: string | null
          id: string
          ip: unknown | null
          link_id: string
          os: string | null
          referrer: string | null
          updated_at: string
          user_agent: string | null
        }
        Insert: {
          action: string
          browser?: string | null
          country_code?: string | null
          created_at?: string
          device?: string | null
          id?: string
          ip?: unknown | null
          link_id: string
          os?: string | null
          referrer?: string | null
          updated_at?: string
          user_agent?: string | null
        }
        Update: {
          action?: string
          browser?: string | null
          country_code?: string | null
          created_at?: string
          device?: string | null
          id?: string
          ip?: unknown | null
          link_id?: string
          os?: string | null
          referrer?: string | null
          updated_at?: string
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "links_stats_log_link_id_fkey"
            columns: ["link_id"]
            referencedRelation: "link"
            referencedColumns: ["id"]
          }
        ]
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
      update_links_order: {
        Args: {
          payload: Json
        }
        Returns: {
          active: boolean | null
          created_at: string | null
          id: string
          name: string
          ordinal: number | null
          updated_at: string | null
          url: string
          user_id: string
        }[]
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
