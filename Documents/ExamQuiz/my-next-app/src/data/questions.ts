import { Question } from '@/types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: "インターネットに接続することをなんと呼びますか？",
    options: ["ネットワークアクセス", "インターネットアクセス", "アクセスする", "ネットワーク接続"],
    correctAnswer: 2,
    explanation: "インターネットに接続することをインターネットにアクセスする、門司区は「インターネットアクセス」と呼びます。"
  },
  {
    id: 2,
    question: "インターネットに接続しているコンピュータは一台一台に『〜』という番号が割り当てられます。",
    options: ["IPアドレス", "ネットワークアドレス", "ネットワークアクセス", "インターネットアクセス"],
    correctAnswer: 0,
    explanation: "インターネットに接続しているコンピュータは一台一台にIPアドレスという番号が割り当てられます。"
  },
  {
    id: 3,
    question: "インターネットへ接続するサービスを提供する業者を一般に「〜」と呼びます",
    options: ["ネットワーク", "インターネット", "プロバイダ", "ネットワークアクセス"],
    correctAnswer: 2,
    explanation: "インターネットへ接続するサービスを提供する業者を一般に「プロバイダ」と呼びます。"
  },
  {
    id: 4,
    question: "HTMLの略語は？",
    options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
    correctAnswer: 0,
    explanation: "HTMLはHyperText Markup Languageの略です。"
  },
  {
    id: 5,
    question: "インターネットの全身のネットワークで元々はアメリカの軍事ネットワークかつ世界最大のネットワークをなんと呼ぶか",
    options: ["ARPANET", "CSMA/CD", "TCP/IP", "HTTP"],
    correctAnswer: 0,
    explanation: "インターネットの全身のネットワークで元々はアメリカの軍事ネットワークかつ世界最大のネットワークをARPANETと呼びます。"
  },
  {
    id: 6,
    question: "ネットワーク同士を相互接続したネットワークを「〜」と呼ぶ。",
    options: ["NetworkまたはThe Network", "InternetまたはThe Internet", "InternetまたはThe Network", "NetworkまたはThe Internet"],
    correctAnswer: 0,
    explanation: "ネットワーク同士を相互接続したネットワークを「InternetまたはThe Internet」と呼びます。"
  },
  {
    id: 7,
    question: "The Internetは「〜」を採用して以降世界的なネットワークとなった。",
    options: ["TCP/IPプロトコル", "CSMA/CDプロトコル", "IP/TCPプロトコル", "HTTPプロトコル"],
    correctAnswer: 0,
    explanation: "The Internetは「TCP/IPプロトコル」を採用して以降世界的なネットワークとなった。"
  },
  {
    id: 8,
    question: "IPv4は何ビット？",
    options: ["32ビット", "64ビット", "128ビット", "256ビット"],
    correctAnswer: 0,
    explanation: "IPv4は32ビットです。"
  },
  {
    id: 9,
    question: "IPv6は何ビット？",
    options: ["32ビット", "64ビット", "128ビット", "256ビット"],
    correctAnswer: 2,
    explanation: "IPv6は128ビットです。"
  },
  {
    id: 10,
    question: "「〜」でマウスをクリックするだけで世界中のインターネット上の情報がマルチメディア表示される。",
    options: ["WEBブラウザ", "ネットワーク", "マルチメディア", "マウス"],
    correctAnswer: 0,
    explanation: "「WEBブラウザ」でマウスをクリックするだけで世界中のインターネット上の情報がマルチメディア表示される。"
  },
  {
    id: 11,
    question: "記述言語は「〜」を使ったHTMLで記述されている。",
    options: ["CSS", "ハイパーテキスト", "ハイパーテキストマークアップ言語", "ハイパーテキスト言語"],
    correctAnswer: 0,
    explanation: "記述言語は「ハイパーテキスト」を使ったHTMLで記述されている。"
  },
  {
    id: 12,
    question: "HTMLを通じて「〜」を辿ることで世界中のサーバーを渡り歩くことができる。",
    options: ["ハイパーリンク", "ハイパーテキスト", "ハイパーテキストマークアップ言語", "ハイパーテキスト言語"],
    correctAnswer: 0,
    explanation: "HTMLを通じて「ハイパーリンク」を辿ることで世界中のサーバーを渡り歩くことができる。"
  },
  {
    id: 13,
    question: "1973年にインターネットのサーバーとして使われるコンピュータを「〜」と呼ぶ。",
    options: ["ネットワーク", "イーサネット", "ネットワークアドレス", "ネットワークアクセス"],
    correctAnswer: 1,
    explanation: "1973年にインターネットのサーバーとして使われるコンピュータを「イーサネット」と呼ぶ。"
  },
  {
    id: 14,
    question: "イーサネットが発明された時「〜」技術でプリンタを接続することができる。",
    options: ["JPNIC", "CSMA/CD", "ARPANET", "JUNET"],
    correctAnswer: 1,
    explanation: "イーサネットが発明された時「CSMA/CD」技術でプリンタを接続することができる。"
  },
  {
    id: 15,
    question: "無線の代わりに「〜」を利用したのがイーサネット",
    options: ["クロスケーブル", "DNSルートサーバ", "同軸ケーブル", "ツイストペアケーブル"],
    correctAnswer: 2,
    explanation: "無線の代わりに「同軸ケーブル」を利用したのがイーサネット"
  },
  {
    id: 16,
    question: "1983年の電装媒体は「〜」や光ファイバ",
    options: ["クロスケーブル", "DNSルートサーバ", "同軸ケーブル", "ツイストペアケーブル"],
    correctAnswer: 2,
    explanation: "1983年の電装媒体は「ツイストペアケーブル」や光ファイバ"
  },
]; 