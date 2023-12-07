<hello name="{{ name }}"></hello>
<p>Start editing to see some magic happen :)</p>

<div *ngIfNot="false">
  <div *ngFor="let p of posts " class="post">
    <div class="title">{{p.title}}</div>
  </div>
</div>
