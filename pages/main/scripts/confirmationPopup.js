import {createDiv, createMyNode} from "./utils.js";

let renderConfirmation = () => {
  let popup = createDiv('confirmation-popup');
  let popupHeader = createDiv('popup-header');
  let closeButton = createMyNode('button', 'close-popup', 'x');
  let popupTitle = createMyNode('h3', 'popup-title', `Item added to your cart`);
  popupHeader.appendChild(closeButton);
  popupHeader.appendChild(popupTitle);
  //
  // let popupBody = createDiv('popup-body');
  // // You have 5 items in your basket
  // // Total cost: 416,95 zł

  popup.appendChild(popupHeader);

  return popup;
  // popup.appendChild(popupBody);
}
export {renderConfirmation};
/*
<div class="modal-body">

    <div class="basket-popup-wrap"><div class="basket-info">
<span id="basket-total-count" class="string-to-localize" data-parameters="{&quot;0&quot;:&quot;5&quot;}" data-localizer-string-id="bd_js_total_basket_count" data-default-localized-pattern="{0, plural,
		  one {You have <b><span class='item-count'>1</span>
				<span class='item-text'>item</span></b> in your basket}
		  other {You have <b><span class='item-count'>{0}</span>
					<span class='item-text'>items</span></b> in your basket}}">You have <b><span class="item-count">5</span> <span class="item-text">items</span></b> in your basket</span>
<br>
<span id="basket-total-cost" class="string-to-localize" data-parameters="{&quot;0&quot;:&quot;416,95 zł&quot;}" data-localizer-string-id="bd_js_total_cost" data-default-localized-pattern="Total cost: <b class='pink-text big total'>{0}</b>">Total cost: <b class="pink-text big total">416,95 zł</b></span>
<br>
<br>

<a data-dismiss="modal" class="btn btn-grey pull-left continue-shopping string-to-localize" data-localizer-string-id="bd_js_continue_shopping" data-default-localized-pattern="Continue shopping">Continue Shopping</a>
<a href="/basket" class="btn btn-primary pull-right continue-to-basket string-to-localize link-to-localize" data-localizer-string-id="bd_js_basket_checkout" data-default-localized-pattern="Basket / Checkout">Basket / Checkout</a></div><div class="basket-related-items"><div class="related-items-wrap active"><h3 class="carousel-title">Often bought with your items</h3><div class="carousel-wrap carousel-begin"><a class="prev-btn"><i class="icon-chevron-left"></i></a><div class="carousel module tab-wrap carousel-active"><div class="tab">

<div class="book-item">
	<div class="item-img">
		<a href="/Rockstar-Detectives-Adam-Hills/9780241505977?ref=pd_gw_sims_a2c_1" class="link-to-localize">
			<img src="//d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/2415/9780241505977.jpg" alt="Rockstar Detectives">




		</a>
	</div>

	<div class="item-info">
		<h3 class="title">
			<a href="/Rockstar-Detectives-Adam-Hills/9780241505977?ref=pd_gw_sims_a2c_1" class="link-to-localize">
				Rockstar Detectives
			</a>
		</h3>
		<p class="author">
			Adam Hills
		</p>
		<div class="rating-wrap">
			<span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span><span class="star"></span>
		</div>

		<p class="format">
			Paperback
		</p>


        <div class="price-wrap omnibus-experiment-control">
            <p class="price ">
                <span class="sale-price">65,57 zł</span>
                <span class="rrp"></span>
            </p>

		</div>

		<div class="price-wrap omnibus-experiment-variant">
            <p class="price omnibus">
                <span class="sale-price">65,57 zł</span>

            </p>

        </div>
	</div>

	<div class="item-actions">
		<div class="btn-wrap">
			<a href="" class="btn btn-sm btn-primary add-to-basket string-to-localize link-to-localize" data-localizer-string-id="bd_add_to_basket" data-default-localized-pattern="Add to basket" data-ref="pd_gw_sims_a2c_1" data-isbn="9780241505977">Add to basket</a>
		</div>
	</div>
</div>

<div class="book-item">
	<div class="item-img">
		<a href="/The-Sugared-Game-Kj-Charles/9781912688180?ref=pd_gw_sims_a2c_1" class="link-to-localize">
			<img src="//d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/9126/9781912688180.jpg" alt="The Sugared Game">




		</a>
	</div>

	<div class="item-info">
		<h3 class="title">
			<a href="/The-Sugared-Game-Kj-Charles/9781912688180?ref=pd_gw_sims_a2c_1" class="link-to-localize">
				The Sugared Game
			</a>
		</h3>
		<p class="author">
			Kj Charles
		</p>
		<div class="rating-wrap">
			<span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span><span class="star"></span>
		</div>

		<p class="format">
			Paperback
		</p>


        <div class="price-wrap omnibus-experiment-control">
            <p class="price ">
                <span class="sale-price">74,73 zł</span>
                <span class="rrp"></span>
            </p>

		</div>

		<div class="price-wrap omnibus-experiment-variant">
            <p class="price omnibus">
                <span class="sale-price">74,73 zł</span>

            </p>

        </div>
	</div>

	<div class="item-actions">
		<div class="btn-wrap">
			<a href="" class="btn btn-sm btn-primary add-to-basket string-to-localize link-to-localize" data-localizer-string-id="bd_add_to_basket" data-default-localized-pattern="Add to basket" data-ref="pd_gw_sims_a2c_1" data-isbn="9781912688180">Add to basket</a>
		</div>
	</div>
</div>

<div class="book-item">
	<div class="item-img">
		<a href="/Subtle-Blood-Kj-Charles/9781912688203?ref=pd_gw_sims_a2c_1" class="link-to-localize">
			<img src="//d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/9126/9781912688203.jpg" alt="Subtle Blood">




		</a>
	</div>

	<div class="item-info">
		<h3 class="title">
			<a href="/Subtle-Blood-Kj-Charles/9781912688203?ref=pd_gw_sims_a2c_1" class="link-to-localize">
				Subtle Blood
			</a>
		</h3>
		<p class="author">
			Kj Charles
		</p>
		<div class="rating-wrap">
			<span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span><span class="star"></span>
		</div>

		<p class="format">
			Paperback
		</p>


        <div class="price-wrap omnibus-experiment-control">
            <p class="price ">
                <span class="sale-price">74,95 zł</span>
                <span class="rrp"></span>
            </p>

		</div>

		<div class="price-wrap omnibus-experiment-variant">
            <p class="price omnibus">
                <span class="sale-price">74,95 zł</span>

            </p>

        </div>
	</div>

	<div class="item-actions">
		<div class="btn-wrap">
			<a href="" class="btn btn-sm btn-primary add-to-basket string-to-localize link-to-localize" data-localizer-string-id="bd_add_to_basket" data-default-localized-pattern="Add to basket" data-ref="pd_gw_sims_a2c_1" data-isbn="9781912688203">Add to basket</a>
		</div>
	</div>
</div>

<div class="book-item">
	<div class="item-img">
		<a href="/BTS---The-Ultimate-Fan-Book-Malcolm-Croft/9781787392502?ref=pd_gw_sims_a2c_1" class="link-to-localize">
			<img src="//d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7873/9781787392502.jpg" alt="BTS - The Ultimate Fan Book">




		</a>
	</div>

	<div class="item-info">
		<h3 class="title">
			<a href="/BTS---The-Ultimate-Fan-Book-Malcolm-Croft/9781787392502?ref=pd_gw_sims_a2c_1" class="link-to-localize">
				BTS - The Ultimate Fan Book
			</a>
		</h3>
		<p class="author">
			Malcolm Croft
		</p>
		<div class="rating-wrap">
			<span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span><span class="star"></span>
		</div>

		<p class="format">
			Hardback
		</p>


        <div class="price-wrap omnibus-experiment-control">
            <p class="price ">
                <span class="sale-price">114,94 zł</span>
                <span class="rrp"></span>
            </p>

		</div>

		<div class="price-wrap omnibus-experiment-variant">
            <p class="price omnibus">
                <span class="sale-price">114,94 zł</span>

            </p>

        </div>
	</div>

	<div class="item-actions">
		<div class="btn-wrap">
			<a href="" class="btn btn-sm btn-primary add-to-basket string-to-localize link-to-localize" data-localizer-string-id="bd_add_to_basket" data-default-localized-pattern="Add to basket" data-ref="pd_gw_sims_a2c_1" data-isbn="9781787392502">Add to basket</a>
		</div>
	</div>
</div>

<div class="book-item">
	<div class="item-img">
		<a href="/Leaders-Eat-Last-Simon-Sinek/9780670923175?ref=pd_gw_sims_a2c_1" class="link-to-localize">
			<img src="//d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/6709/9780670923175.jpg" alt="Leaders Eat Last">




		</a>
	</div>

	<div class="item-info">
		<h3 class="title">
			<a href="/Leaders-Eat-Last-Simon-Sinek/9780670923175?ref=pd_gw_sims_a2c_1" class="link-to-localize">
				Leaders Eat Last
			</a>
		</h3>
		<p class="author">
			Simon Sinek
		</p>
		<div class="rating-wrap">
			<span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span><span class="star"></span>
		</div>

		<p class="format">
			Paperback
		</p>


        <div class="price-wrap omnibus-experiment-control">
            <p class="price ">
                <span class="sale-price">80,41 zł</span>
                <span class="rrp"></span>
            </p>

		</div>

		<div class="price-wrap omnibus-experiment-variant">
            <p class="price omnibus">
                <span class="sale-price">80,41 zł</span>

            </p>

        </div>
	</div>

	<div class="item-actions">
		<div class="btn-wrap">
			<a href="" class="btn btn-sm btn-primary add-to-basket string-to-localize link-to-localize" data-localizer-string-id="bd_add_to_basket" data-default-localized-pattern="Add to basket" data-ref="pd_gw_sims_a2c_1" data-isbn="9780670923175">Add to basket</a>
		</div>
	</div>
</div>

<div class="book-item">
	<div class="item-img">
		<a href="/The-Unofficial-BTS-Bible-Dianne-Pineda-Kim/9781631585975?ref=pd_gw_sims_a2c_1" class="link-to-localize">
			<img src="//d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/6315/9781631585975.jpg" alt="The Unofficial BTS Bible">




		</a>
	</div>

	<div class="item-info">
		<h3 class="title">
			<a href="/The-Unofficial-BTS-Bible-Dianne-Pineda-Kim/9781631585975?ref=pd_gw_sims_a2c_1" class="link-to-localize">
				The Unofficial BTS Bible
			</a>
		</h3>
		<p class="author">
			Dianne Pineda-Kim
		</p>
		<div class="rating-wrap">
			<span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span>
		</div>

		<p class="format">
			Paperback
		</p>


        <div class="price-wrap omnibus-experiment-control">
            <p class="price ">
                <span class="sale-price">71,3 zł</span>
                <span class="rrp"></span>
            </p>

		</div>

		<div class="price-wrap omnibus-experiment-variant">
            <p class="price omnibus">
                <span class="sale-price">71,3 zł</span>

            </p>

        </div>
	</div>

	<div class="item-actions">
		<div class="btn-wrap">
			<a href="" class="btn btn-sm btn-primary add-to-basket string-to-localize link-to-localize" data-localizer-string-id="bd_add_to_basket" data-default-localized-pattern="Add to basket" data-ref="pd_gw_sims_a2c_1" data-isbn="9781631585975">Add to basket</a>
		</div>
	</div>
</div>

<div class="book-item">
	<div class="item-img">
		<a href="/BTS-Coloring-Book-Bts-Press/9798461754938?ref=pd_gw_sims_a2c_1" class="link-to-localize">
			<img src="//d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9798/4617/9798461754938.jpg" alt="BTS Coloring Book">




		</a>
	</div>

	<div class="item-info">
		<h3 class="title">
			<a href="/BTS-Coloring-Book-Bts-Press/9798461754938?ref=pd_gw_sims_a2c_1" class="link-to-localize">
				BTS Coloring Book
			</a>
		</h3>
		<p class="author">
			Bts Press
		</p>
		<div class="rating-wrap">

		</div>

		<p class="format">
			Paperback
		</p>


        <div class="price-wrap omnibus-experiment-control">
            <p class="price ">
                <span class="sale-price">65,3 zł</span>
                <span class="rrp"></span>
            </p>

		</div>

		<div class="price-wrap omnibus-experiment-variant">
            <p class="price omnibus">
                <span class="sale-price">65,3 zł</span>

            </p>

        </div>
	</div>

	<div class="item-actions">
		<div class="btn-wrap">
			<a href="" class="btn btn-sm btn-primary add-to-basket string-to-localize link-to-localize" data-localizer-string-id="bd_add_to_basket" data-default-localized-pattern="Add to basket" data-ref="pd_gw_sims_a2c_1" data-isbn="9798461754938">Add to basket</a>
		</div>
	</div>
</div>

<div class="book-item">
	<div class="item-img">
		<a href="/Bts-Book-Kpop-Ftw/9781674205120?ref=pd_gw_sims_a2c_1" class="link-to-localize">
			<img src="//d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/6742/9781674205120.jpg" alt="Bts Book">




		</a>
	</div>

	<div class="item-info">
		<h3 class="title">
			<a href="/Bts-Book-Kpop-Ftw/9781674205120?ref=pd_gw_sims_a2c_1" class="link-to-localize">
				Bts Book
			</a>
		</h3>
		<p class="author">
			Kpop Ftw
		</p>
		<div class="rating-wrap">

		</div>

		<p class="format">
			Paperback
		</p>


        <div class="price-wrap omnibus-experiment-control">
            <p class="price ">
                <span class="sale-price">70,75 zł</span>
                <span class="rrp"></span>
            </p>

		</div>

		<div class="price-wrap omnibus-experiment-variant">
            <p class="price omnibus">
                <span class="sale-price">70,75 zł</span>

            </p>

        </div>
	</div>

	<div class="item-actions">
		<div class="btn-wrap">
			<a href="" class="btn btn-sm btn-primary add-to-basket string-to-localize link-to-localize" data-localizer-string-id="bd_add_to_basket" data-default-localized-pattern="Add to basket" data-ref="pd_gw_sims_a2c_1" data-isbn="9781674205120">Add to basket</a>
		</div>
	</div>
</div>

<div class="book-item">
	<div class="item-img">
		<a href="/The-Big-Book-of-BTS-Katy-Sprinkel/9781629377599?ref=pd_gw_sims_a2c_1" class="link-to-localize">
			<img src="//d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/6293/9781629377599.jpg" alt="The Big Book of BTS">




		</a>
	</div>

	<div class="item-info">
		<h3 class="title">
			<a href="/The-Big-Book-of-BTS-Katy-Sprinkel/9781629377599?ref=pd_gw_sims_a2c_1" class="link-to-localize">
				The Big Book of BTS
			</a>
		</h3>
		<p class="author">
			Katy Sprinkel
		</p>
		<div class="rating-wrap">
			<span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span><span class="star full-star"></span><span class="star"></span>
		</div>

		<p class="format">
			Hardback
		</p>


        <div class="price-wrap omnibus-experiment-control">
            <p class="price ">
                <span class="sale-price">108,76 zł</span>
                <span class="rrp"></span>
            </p>

		</div>

		<div class="price-wrap omnibus-experiment-variant">
            <p class="price omnibus">
                <span class="sale-price">108,76 zł</span>

            </p>

        </div>
	</div>

	<div class="item-actions">
		<div class="btn-wrap">
			<a href="" class="btn btn-sm btn-primary add-to-basket string-to-localize link-to-localize" data-localizer-string-id="bd_add_to_basket" data-default-localized-pattern="Add to basket" data-ref="pd_gw_sims_a2c_1" data-isbn="9781629377599">Add to basket</a>
		</div>
	</div>
</div>

<div class="book-item">
	<div class="item-img">
		<a href="/Park-jimin-photobook-Kouki-Shop/9798714625527?ref=pd_gw_sims_a2c_1" class="link-to-localize">
			<img src="//d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9798/7146/9798714625527.jpg" alt="Park jimin photobook">




		</a>
	</div>

	<div class="item-info">
		<h3 class="title">
			<a href="/Park-jimin-photobook-Kouki-Shop/9798714625527?ref=pd_gw_sims_a2c_1" class="link-to-localize">
				Park jimin photobook
			</a>
		</h3>
		<p class="author">
			Kouki Shop
		</p>
		<div class="rating-wrap">

		</div>

		<p class="format">
			Paperback
		</p>


        <div class="price-wrap omnibus-experiment-control">
            <p class="price ">
                <span class="sale-price">77,84 zł</span>
                <span class="rrp"></span>
            </p>

		</div>

		<div class="price-wrap omnibus-experiment-variant">
            <p class="price omnibus">
                <span class="sale-price">77,84 zł</span>

            </p>

        </div>
	</div>

	<div class="item-actions">
		<div class="btn-wrap">
			<a href="" class="btn btn-sm btn-primary add-to-basket string-to-localize link-to-localize" data-localizer-string-id="bd_add_to_basket" data-default-localized-pattern="Add to basket" data-ref="pd_gw_sims_a2c_1" data-isbn="9798714625527">Add to basket</a>
		</div>
	</div>
</div></div></div><a class="next-btn"><i class="icon-chevron-right"></i></a></div></div></div></div></div>
 */
