import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../model/comment';
import { EmitterService } from '../../emitter.service';
import { CommentService } from '../services/comment.service';

@Component({
	moduleId: module.id,
	selector: 'comment-box',
	templateUrl: 'comment-box.component.html'
})
export class CommentBoxComponent {
	
	constructor(private commentService:CommentService) {}

	@Input() comment: Comment; // holds data passed from a parent component
	@Input() listId: string;
	@Input() editId: string;

	editComment() {
		// emmits an edit comment tracked by the Input ID
		EmitterService.get(this.editId).emit(this.comment);
	}

	deleteComment(id:string) {
		this.commentService.removeComment(id).subscribe(
			comments => {
				EmitterService.get(this.listId).emit(comments);
			},
			err => {
				console.log(err);
			});
	}
}