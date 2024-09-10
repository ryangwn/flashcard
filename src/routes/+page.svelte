<script>
	import { getColorStyleFromString } from '@/util/bg';
	import slugify from 'slugify';
</script>

<div class="w-full flex flex-col p-6 lg:p-8">
	<div>
		<div class="flex gap-3">
			<form role="search" novalidate class="relative w-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-search absolute top-1/2 left-3 -translate-y-1/2 size-4 shrink-0 pointer-events-none"
					><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg
				>
				<input
					class="appearance-none border text-sm font-medium px-3 py-2 pl-9 bg-white rounded-xl w-full"
					type="text"
					autocomplete="off"
					autocorrect="off"
					autocapitalize="off"
					placeholder="Type to search…"
					spellcheck="false"
				/>
			</form>
			<select class="appearance-none border text-sm font-medium px-3 py-2 pr-8 bg-white rounded-xl">
				<option value="openalternative_created_desc">Latest</option>
			</select>
		</div>

		<!-- <h1 class="text-2xl">Books:</h1> -->
		<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 grid-a my-6">
			<a
				href="/learn/{slugify(
					'VOCABULARY IN USE Pre-intermediate and Intermediate'.toLowerCase()
				)}-i0417"
			>
				<div
					class="relative z-10 flex flex-col gap-1 rounded-xl p-6 text-left min-h-52 h-full"
          style={getColorStyleFromString("VOCABULARY IN USE")}
				>
					<div class="flex w-full items-center justify-between">
						<span class="text-lg font-medium leading-none">VOCABULARY IN USE</span>
						<!-- <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V27C0 28.6569 1.34315 30 3 30H22.5C23.3284 30 24 29.3284 24 28.5V1.5C24 0.671573 23.3284 0 22.5 0H3ZM3 24H21V27H3V24ZM12.6122 7.77639C12.5396 7.92154 12.4219 8.03923 12.2768 8.1118L10.3421 9.07918C9.78926 9.35557 9.78926 10.1444 10.342 10.4208L12.2768 11.3882C12.4219 11.4608 12.5396 11.5785 12.6122 11.7236L13.5796 13.6584C13.856 14.2111 14.6448 14.2111 14.9212 13.6584L15.8886 11.7236C15.9612 11.5785 16.0789 11.4608 16.224 11.3882L18.1588 10.4208C18.7116 10.1444 18.7116 9.35557 18.1588 9.07918L16.224 8.1118C16.0789 8.03923 15.9612 7.92154 15.8886 7.77639L14.9212 5.84164C14.6448 5.28886 13.856 5.28885 13.5796 5.84164L12.6122 7.77639ZM7.06749 14.3658C7.02395 14.4529 6.95333 14.5235 6.86625 14.5671L5.30539 15.3475C4.97372 15.5133 4.97372 15.9867 5.30539 16.1525L6.86625 16.9329C6.95333 16.9765 7.02395 17.0471 7.06749 17.1342L7.84792 18.695C8.01375 19.0267 8.48707 19.0267 8.6529 18.695L9.43333 17.1342C9.47687 17.0471 9.54749 16.9765 9.63457 16.9329L11.1954 16.1525C11.5271 15.9867 11.5271 15.5133 11.1954 15.3475L9.63457 14.5671C9.54749 14.5235 9.47687 14.4529 9.43333 14.3658L8.6529 12.805C8.48707 12.4733 8.01375 12.4733 7.84792 12.805L7.06749 14.3658Z" fill="#F2F2F2"></path></svg> -->
					</div>
					<div class="mt-4 text-sm text-left leading-5">Pre-intermediate and Intermediate</div>
					<div class="grow"></div>
					<div class="flex items-center gap-2 text-highlight">
						<span class="text-md font-medium uppercase">@ryan</span>
					</div>
				</div>
			</a>

			<a href="/learn/{slugify('Academic-vocabulary'.toLowerCase())}-i983">
				<div
					class="relative z-10 flex flex-col gap-1 rounded-xl p-6 text-left text-white min-h-52 h-full"
					style={getColorStyleFromString("Academic vocabulary")}
				>
					<div class="flex w-full items-center justify-between">
						<span class="text-lg font-medium leading-none uppercase">Academic vocabulary</span>
						<!-- <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V27C0 28.6569 1.34315 30 3 30H22.5C23.3284 30 24 29.3284 24 28.5V1.5C24 0.671573 23.3284 0 22.5 0H3ZM3 24H21V27H3V24ZM12.6122 7.77639C12.5396 7.92154 12.4219 8.03923 12.2768 8.1118L10.3421 9.07918C9.78926 9.35557 9.78926 10.1444 10.342 10.4208L12.2768 11.3882C12.4219 11.4608 12.5396 11.5785 12.6122 11.7236L13.5796 13.6584C13.856 14.2111 14.6448 14.2111 14.9212 13.6584L15.8886 11.7236C15.9612 11.5785 16.0789 11.4608 16.224 11.3882L18.1588 10.4208C18.7116 10.1444 18.7116 9.35557 18.1588 9.07918L16.224 8.1118C16.0789 8.03923 15.9612 7.92154 15.8886 7.77639L14.9212 5.84164C14.6448 5.28886 13.856 5.28885 13.5796 5.84164L12.6122 7.77639ZM7.06749 14.3658C7.02395 14.4529 6.95333 14.5235 6.86625 14.5671L5.30539 15.3475C4.97372 15.5133 4.97372 15.9867 5.30539 16.1525L6.86625 16.9329C6.95333 16.9765 7.02395 17.0471 7.06749 17.1342L7.84792 18.695C8.01375 19.0267 8.48707 19.0267 8.6529 18.695L9.43333 17.1342C9.47687 17.0471 9.54749 16.9765 9.63457 16.9329L11.1954 16.1525C11.5271 15.9867 11.5271 15.5133 11.1954 15.3475L9.63457 14.5671C9.54749 14.5235 9.47687 14.4529 9.43333 14.3658L8.6529 12.805C8.48707 12.4733 8.01375 12.4733 7.84792 12.805L7.06749 14.3658Z" fill="#F2F2F2"></path></svg> -->
					</div>
					<div class="mt-4 text-sm text-left leading-5">
						Vocabulary for those who hate spending too much time
					</div>
					<div class="grow py-6"></div>
					<div class="flex items-center gap-2 text-highlight">
						<span class="text-md font-medium uppercase">@ryan</span>
					</div>
				</div>
			</a>

			<a href="/learn/{slugify('law'.toLowerCase())}-i087">
				<div
					class="relative z-10 flex flex-col gap-1 rounded-xl p-6 text-left text-white min-h-52 h-full"
          style={getColorStyleFromString("Law vocabulary")}
				>
					<div class="flex w-full items-center justify-between">
						<span class="text-lg font-medium leading-none uppercase">Law vocabulary</span>
						<!-- <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V27C0 28.6569 1.34315 30 3 30H22.5C23.3284 30 24 29.3284 24 28.5V1.5C24 0.671573 23.3284 0 22.5 0H3ZM3 24H21V27H3V24ZM12.6122 7.77639C12.5396 7.92154 12.4219 8.03923 12.2768 8.1118L10.3421 9.07918C9.78926 9.35557 9.78926 10.1444 10.342 10.4208L12.2768 11.3882C12.4219 11.4608 12.5396 11.5785 12.6122 11.7236L13.5796 13.6584C13.856 14.2111 14.6448 14.2111 14.9212 13.6584L15.8886 11.7236C15.9612 11.5785 16.0789 11.4608 16.224 11.3882L18.1588 10.4208C18.7116 10.1444 18.7116 9.35557 18.1588 9.07918L16.224 8.1118C16.0789 8.03923 15.9612 7.92154 15.8886 7.77639L14.9212 5.84164C14.6448 5.28886 13.856 5.28885 13.5796 5.84164L12.6122 7.77639ZM7.06749 14.3658C7.02395 14.4529 6.95333 14.5235 6.86625 14.5671L5.30539 15.3475C4.97372 15.5133 4.97372 15.9867 5.30539 16.1525L6.86625 16.9329C6.95333 16.9765 7.02395 17.0471 7.06749 17.1342L7.84792 18.695C8.01375 19.0267 8.48707 19.0267 8.6529 18.695L9.43333 17.1342C9.47687 17.0471 9.54749 16.9765 9.63457 16.9329L11.1954 16.1525C11.5271 15.9867 11.5271 15.5133 11.1954 15.3475L9.63457 14.5671C9.54749 14.5235 9.47687 14.4529 9.43333 14.3658L8.6529 12.805C8.48707 12.4733 8.01375 12.4733 7.84792 12.805L7.06749 14.3658Z" fill="#F2F2F2"></path></svg> -->
					</div>
					<div class="mt-4 text-sm text-left leading-5"></div>
					<div class="grow py-6"></div>
					<div class="flex items-center gap-2 text-highlight">
						<span class="text-md font-medium uppercase">@ryan</span>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>

<style>
	:global(select:not([size])) {
		background-repeat: no-repeat;
		background-position: right 0.75rem center;
		background-size: 1.25em 1.25em;
		padding-right: 2rem;
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93bic+PHBhdGggZD0nbTYgOSA2IDYgNi02Jy8+PC9zdmc+);
	}
</style>
