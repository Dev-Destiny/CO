import { Brain, Code, MessageCircle, Trophy, Users, Zap } from "lucide-react";
import type { StepProps } from "../components/Path/Steps";


export const courseCards = [
	{
		name: "Python",
		about: "Master Python programming from basics to advanced concepts. Build real-world projects and learn industry best practices",
		img: "spiral.jpg",
		duration: "8 weeks",
		students: "40.7k students",
		ratings: "4.9",
		level: "Beginner",
		price: "Free",
	},

	{
		name: "Javascript",
		about: "Master Python programming from basics to advanced concepts. Build real-world projects and learn industry best practices",
		img: "spiral.jpg",
		duration: "10 weeks",
		students: "26.8k students",
		ratings: "4.2",
		level: "Intermediate",
		price: "Free",
	},

	{
		name: "RESTful APIs",
		about: "Master Python programming from basics to advanced concepts. Build real-world projects and learn industry best practices",
		img: "spiral.jpg",
		duration: "12 weeks",
		students: "14.2k students",
		ratings: "3.7",
		level: "Advanced",
		price: "Free",
	},
];

export const features = [
	{
		icon: Brain,
		head: "Interactive Learning",
		text: "Learn by doing with hands-on coding exercises and real-world projects that simulate industry challenges",
	},
	{
		icon: Trophy,
		head: "Career Focused",
		text: "Build a portfolio of projects and gain skills that employers are actively seeking in today's market",
	},
	{
		icon: Users,
		head: "Expert Instructors",
		text: "Learn from industry professionals working at top tech companies like Google, Microsoft, and Apple",
	},
	{
		icon: Zap,
		head: "Adaptive Learning",
		text: "Our AI-powered platform adapts to your learning pace and provides personalized recommendations",
	},
	{
		icon: Code,
		head: "Real Code Environment",
		text: "Write and test code in our integrated development environment - no setup required.",
	},
	{
		icon: MessageCircle,
		head: "Community Support",
		text: "Join a vibrant community of learners and get help from peers and mentors whenever you need it.",
	},
];

export const footerLists = [
	{
		head: "Courses",
		linkList: [
			"Python Fundamentals",
			"JavaScript Mastery",
			"React Development",
			"API Development",
			"Data Structures",
		],
	},

	{
		head: "Company",
		linkList: ["About Us", "Careers", "Press", "Blog", "Partners"],
	},

	{
		head: "Support",
		linkList: [
			"Help Center",
			"Contact Us",
			"Privacy Policy",
			"Terms of Service",
			"Refund Policy",
		],
	},
];

export const pathSectSteps: StepProps[] = [
	{
		title: "Sign Up & Assess",
		step: "STEP 1",
		icon: "UserPlus",
		color: "bg-orange-200",
		iconColor: "text-orange-700",
		bar: false,
		text: "Create your account and take our skill assessment to get personalized course recommendations",
	},
	{
		title: "Choose Your Path",
		step: "STEP 2",
		icon: "BookOpen",
		color: "bg-blue-200",
		iconColor: "text-blue-700",
		bar: true,
		text: "Select from our curated learning paths or individual courses based on your goals and current skill level",
	},
	{
		title: "Learn Interactively",
		step: "STEP 3",
		icon: "Lightbulb",
		color: "bg-green-200",
		iconColor: "text-green-700",
		bar: true,
		text: "Engage with hands-on coding challenges, build real projects, and receive instant feedback on your progress",
	},
	{
		title: "Get Certified",
		step: "STEP 4",
		icon: "Award",
		color: "bg-purple-200",
		iconColor: "text-purple-700",
		bar: true,
		text: "Complete assessments, showcase your projects, and earn industry-recognized certificates to boost your career",
	},
];

export const testimonials = [
	{
		course: "Completed: JavaScript Mastery",
		stars: 5,
		img: "me.jpg",
		name: "Sarah Chen",
		message:
			'"The problem-solving approach is brilliant. Instead of just watching videos, I was actually building things from day one."',
		position: "Software Engineer at Google",
	},

	{
		course: "Completed: Advanced Python Development",
		stars: 5,
		img: "spiral.jpg",
		name: "Marcus Johnson",
		position: "Full-stack Developer at Microsoft",
		message:
			'"COs interactive approach helped me land my dream job at Google. The hands-on projects were exactly what I needed to build confidence."',
	},

	{
		course: "Completed: RESTful API Design",
		stars: 5,
		img: "html.png",
		message:
			'"COs API course taught me industry best practices. The interactive exercises prepared me for real-world challenges at Stripe."',
		name: "Priya Patel",
		position: "API Developer at Stripe",
	},
];
